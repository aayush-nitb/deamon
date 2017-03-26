import * as _ from 'underscore';
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Model_Course, ICourse, IResource } from 'app/models/courses/Model_Course'

import 'rxjs/add/operator/switchMap';

@Component({
    selector    : 'app-courses-course',
    styleUrls   : ['./less/App_Courses_Course.less'],
    templateUrl : './templates/App_Courses_Course.html'
})
export class App_Courses_Course implements OnInit {
    private course: ICourse & IResource;
    private editMode: boolean;

    constructor(private model: Model_Course, private route: ActivatedRoute) {
        //noop
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.course = this.model.get({id: params['name']});
            this.model.resolveOnError(this.course);
        });
    }
    save() {
        if (!this.editMode) {
            this.editMode = true;
            return;
        }
        this.course.$resolved = false;
    }
}