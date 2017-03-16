import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector  : 'app-root',
  styleUrls : ['./less/App_Root.less'],
  encapsulation: ViewEncapsulation.None,
  template  : `
    <router-outlet></router-outlet>
  `
})
export class App_Root {
  
}
