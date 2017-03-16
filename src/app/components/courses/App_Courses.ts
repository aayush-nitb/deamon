import { Component } from '@angular/core'
import { App_Courses_Fetcher } from './services/App_Courses_Fetcher'
import { Model_Course } from 'app/models/courses/Model_Course'

@Component({
    selector    : 'app-courses',
    styleUrls   : ['./less/App_Courses.less'],
    providers   : [App_Courses_Fetcher],
    template    : `
        <h2>Cources</h2>
        <ul>
            <li *ngFor=" let course of courses"><a [routerLink]="['/course', course.name]">{{course.start}} <label>{{course.name}}</label></a></li>
        </ul>
    `
})
export class App_Courses {
    private courses: Model_Course[];

    constructor(fetcher: App_Courses_Fetcher) {
        this.courses = fetcher.getCourses();
    }
}