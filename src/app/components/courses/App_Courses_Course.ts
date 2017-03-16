import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { App_Courses_Fetcher } from './services/App_Courses_Fetcher'
import { Model_Course } from 'app/models/courses/Model_Course'

import 'rxjs/add/operator/switchMap';

@Component({
    selector    : 'app-courses-course',
    styleUrls   : ['./less/App_Courses_Course.less'],
    providers   : [App_Courses_Fetcher],
    template    : `
        <div *ngIf="course">
            <h2>{{course.name}}</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div *ngIf="!course">
            <h3 class="error">Course not found !</h3>
        </div>
    `
})
export class App_Courses_Course implements OnInit {
    private course: Model_Course;

    constructor(private fetcher: App_Courses_Fetcher, private route: ActivatedRoute) {
        //noop
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.course = this.fetcher.getCourse(params['name']);
        });
    }
}