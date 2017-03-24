import { Injectable, Output, EventEmitter } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Model_Course } from 'app/models/courses/Model_Course'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/finally'

const Resource = 'http://megan-api.herokuapp.com/api/v1/courses/';

@Injectable()
export class App_Courses_Fetcher {
    private model;

    @Output()
    change: EventEmitter<any> = new EventEmitter<any>();

    constructor(private http: Http) {
        this.model = {
            getCourses: {},
            getCourse: {}
        };
    }
    getCourses() {
        this.change.emit(this.model.getCourses = {
            loading: true,
            data: undefined,
            error: undefined
        });
        let service = this.http.get(Resource);
        let event = service.map(res => res.json());
        event.subscribe(data => {
            this.change.emit(this.model.getCourses = {
                loading: false,
                data: data,
                error: undefined
            });
        }, error => {
            this.change.emit(this.model.getCourses = {
                loading: false,
                data: undefined,
                error: error
            });
        });
    }
    getCourse(name: String) {
        this.change.emit(this.model.getCourse = {
            loading: true,
            data: undefined,
            error: undefined
        });
        let service = this.http.get(Resource + name);
        let event = service.map(res => res.json());
        event.subscribe(data => {
            this.change.emit(this.model.getCourse = {
                loading: false,
                data: data,
                error: undefined
            });
        }, error => {
            this.change.emit(this.model.getCourse = {
                loading: false,
                data: undefined,
                error: error
            });
        });
    }
}