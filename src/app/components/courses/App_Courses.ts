import { Component } from '@angular/core'
import { App_Courses_Fetcher } from './services/App_Courses_Fetcher'
import { Model_Course } from 'app/models/courses/Model_Course'

@Component({
    selector    : 'app-courses',
    styleUrls   : ['./less/App_Courses.less'],
    providers   : [App_Courses_Fetcher],
    templateUrl : './templates/App_Courses.html'
})
export class App_Courses {
    private courses: Model_Course[];

    constructor(fetcher: App_Courses_Fetcher) {
        this.courses = fetcher.getCourses();
    }
}