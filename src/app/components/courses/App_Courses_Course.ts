import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { App_Courses_Fetcher } from './services/App_Courses_Fetcher'
import { Model_Course } from 'app/models/courses/Model_Course'

import 'rxjs/add/operator/switchMap';

@Component({
    selector    : 'app-courses-course',
    styleUrls   : ['./less/App_Courses_Course.less'],
    providers   : [App_Courses_Fetcher],
    templateUrl : './templates/App_Courses_Course.html'
})
export class App_Courses_Course implements OnInit {
    private course: Model_Course;
    private loading: boolean;

    constructor(private fetcher: App_Courses_Fetcher, private route: ActivatedRoute) {
        this.fetcher.change.subscribe(model => {
            this.loading = model.loading;
            this.course = model.data;
        });
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.fetcher.getCourse(params['name']);
        });
    }
}