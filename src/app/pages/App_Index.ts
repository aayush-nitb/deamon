import { Component } from '@angular/core'

@Component({
  selector  : 'app-index',
  styleUrls : ['./less/App_Index.less'],
  template  : `
    <app-courses app-commons-background="assets/courses/books.jpeg" opacity="0.2" class="app-commons-content"></app-courses>
    <app-subscription></app-subscription>
  `
})
export class App_Index {
  
}
