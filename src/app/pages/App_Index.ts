import { Component } from '@angular/core'

@Component({
  selector  : 'app-index',
  template  : `
    <app-courses app-commons-background="assets/courses/books.jpeg" opacity="0.2"></app-courses>
    <app-subscription></app-subscription>
  `
})
export class App_Index {
  
}
