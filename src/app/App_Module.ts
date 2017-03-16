import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { App_Index } from './pages/App_Index'

import { App_Root } from './components/commons/App_Root'
import { App_Commons_Autogrow } from './components/commons/App_Commons_Autogrow'
import { App_Commons_Background } from './components/commons/App_Commons_Background'
import { App_Courses } from './components/courses/App_Courses'
import { App_Subscription } from './components/subscription/App_Subscription'

@NgModule({
  declarations: [
    App_Index,
    App_Root,
    App_Commons_Autogrow,
    App_Commons_Background,
    App_Courses,
    App_Subscription
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: App_Index
      }
    ])
  ],
  providers: [],
  bootstrap: [App_Root]
})
export class App_Module {

}