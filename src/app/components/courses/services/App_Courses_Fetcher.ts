import { Injectable, EventEmitter } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Model_Course } from 'app/models/courses/Model_Course'

import 'rxjs/add/operator/map'

const Resource = 'http://megan-api.herokuapp.com/api/v1/courses/';

export interface DaoInteface {
    loading: boolean,
    data: Model_Course,
    list: Model_Course[],
    error: any
}

@Injectable()
export class App_Courses_Fetcher {
    private model: Model_Course;
    private change = {
        getList: new EventEmitter<any>(),
        get: new EventEmitter<any>(),
        save: new EventEmitter<any>(),
        delete: new EventEmitter<any>()
    };

    constructor(private http: Http) {
       //noop
    }
    listen(event: string, handler: (dao: DaoInteface) => void) {
        this.change[event].subscribe(handler);
    }
    getList() {
        this.trigger(this.change.getList, 'start');
        this.handle(this.http.get(Resource), this.change.getList);
    }
    get(name: string) {
        this.trigger(this.change.get, 'start');
        this.handle(this.http.get(Resource + name), this.change.get);
    }
    save(model?: Model_Course) {
        this.trigger(this.change.save, 'start');
        if (model) {
            this.validate(model) && this.create(model);
        } else {
            this.validate(this.model) && this.update(this.model);
        }
    }
    delete(model: string|Model_Course) {
        this.trigger(this.change.delete, 'start');
        if (typeof model === 'string') {
            this.handle(this.http.delete(Resource + name), this.change.delete);
        } else {
            this.validate(model) && this.delete(model.name);
        }
    }
    private update(model: Model_Course) {
        let event = this.http.put(Resource + model.name, model);
        this.handle(event, this.change.save);
    }
    private create(model: Model_Course) {
        let event = this.http.post(Resource + model.name, model);
        this.handle(event, this.change.save);
    }
    private validate(model: Model_Course): boolean {
        if (!model || !model.name) {
            this.trigger(this.change.save, 'failure', {
                status: 400,
                statusText: 'Bad Request',
                message: 'must provide resource name'
            });
            return false;
        }
        return true;
    }
    private handle(res: Observable<any>, event: EventEmitter<any>) {
        res.map(res => res.json()).subscribe(
            data => this.trigger(event, 'success', data),
            error => this.trigger(event, 'failure', error)
        );
    }
    private trigger(event: EventEmitter<any>, action: string, payload?: any, isArray?: boolean) {
        switch (action) {
            case 'start':
            event.emit({
                loading: true,
                data: undefined,
                error: undefined
            });
            break;
            case 'success':
            if (!isArray) {
                this.model = payload;
            }
            event.emit({
                loading: false,
                data: isArray? undefined: payload,
                list: isArray? payload: undefined,
                error: undefined
            });
            break;
            case 'failure':
            event.emit({
                loading: false,
                data: undefined,
                error: payload
            });
            break;
        }
    }
}