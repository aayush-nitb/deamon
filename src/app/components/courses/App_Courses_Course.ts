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
    private course: ICourse;
    private editMode: boolean;
    private voltileError: number;

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
            let action: IResource = this.model.$save(this.course);
            //this.model.onSuccess(action, () => this.editMode = false);
            this.model.onError(action, () => {
                if (this.voltileError) clearTimeout(this.voltileError);
                this.voltileError = setTimeout(() => {
                    this.voltileError = undefined;
                }, 5000);
            });
        } else {
            this.editMode = true;
        }
    }
}