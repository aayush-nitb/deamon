import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Model_Course } from 'app/models/courses/Model_Course'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/finally'

const Resource = 'http://megan-api.herokuapp.com/api/v1/courses/';

@Injectable()
export class App_Courses_Fetcher {
    constructor(private http: Http) {
        //noop
    }
    getCourses(): Observable<any> {
        let service = this.http.get(Resource);
        let event = service.map(res => res.json());
        return event;
    }
    getCourse(name: String): Observable<any> {
        let service = this.http.get(Resource + name);
        let event = service.map(res => res.json());
        return event;
    }
}