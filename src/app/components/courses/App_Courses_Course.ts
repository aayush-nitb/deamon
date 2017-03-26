import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Model_Course, ICourse } from 'app/models/courses/Model_Course'

import 'rxjs/add/operator/switchMap';

@Component({
    selector    : 'app-courses-course',
    styleUrls   : ['./less/App_Courses_Course.less'],
    templateUrl : './templates/App_Courses_Course.html'
})
export class App_Courses_Course implements OnInit {
    private course: ICourse;
    private editMode: boolean;

    constructor(private model: Model_Course, private route: ActivatedRoute) {
        //noop
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.course = this.model.one(params['name']);
        });
    }
    save() {
        if (this.editMode) {
            this.model.$save(this.course);
            this.model.onSuccess(this.course, () => this.editMode = false);
        } else {
            this.editMode = true;
        }
    }
}