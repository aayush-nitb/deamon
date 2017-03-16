import { Component } from '@angular/core'

@Component({
    selector    : 'app-course',
    styleUrls   : ['./less/App_Course.less'],
    template    : `
        <app-courses-course app-commons-background="assets/courses/books.jpeg" opacity="0.2" class="app-commons-content"></app-courses-course>
        <app-navigation></app-navigation>
    `
})
export class App_Course {

}