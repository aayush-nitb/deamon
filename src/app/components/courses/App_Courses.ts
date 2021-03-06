import { Component, OnInit } from '@angular/core'
import { App_Courses_Fetcher } from './services/App_Courses_Fetcher'
import { Model_Course } from 'app/models/courses/Model_Course'

@Component({
    selector    : 'app-courses',
    styleUrls   : ['./less/App_Courses.less'],
    providers   : [App_Courses_Fetcher],
    templateUrl : './templates/App_Courses.html'
})
export class App_Courses implements OnInit {
    private courses: Model_Course[];
    private loading: boolean;

    constructor(private fetcher: App_Courses_Fetcher) {
        this.fetcher.listen('getList', dao => {
            this.loading = dao.loading;
            this.courses = dao.list;
        });
    }
    ngOnInit() {
        this.fetcher.getList();
    }
}