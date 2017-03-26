import { Component, OnInit } from '@angular/core'
import { Model_Course, ICourseShort, IResource } from 'app/models/courses/Model_Course'

@Component({
    selector    : 'app-courses',
    styleUrls   : ['./less/App_Courses.less'],
    templateUrl : './templates/App_Courses.html'
})
export class App_Courses implements OnInit {
    private courses: ICourseShort[] & IResource;

    constructor(private model: Model_Course) {
        //noop
    }
    ngOnInit() {
        this.courses = this.model.query();
        this.model.resolveOnError(this.courses);
    }
}