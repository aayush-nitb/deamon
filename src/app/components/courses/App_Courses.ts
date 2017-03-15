import { Component } from '@angular/core'
import { App_Courses_Fetcher } from './services/App_Courses_Fetcher'

@Component({
    selector    : 'app-courses',
    providers   : [App_Courses_Fetcher],
    styleUrls   : ['./less/App_Courses.less'],
    template    : `
        <h2>Cources</h2>
        <ul>
            <li *ngFor=" let course of courses">{{course}}</li>
        </ul>
    `
})
export class App_Courses {
    courses;

    constructor(fetcher: App_Courses_Fetcher) {
        this.courses = fetcher.getCourses();
    }
}