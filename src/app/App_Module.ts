import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { Module_Router } from './modules/Module_Router'

import { App_Index } from 'app/pages/App_Index'
import { App_Course } from 'app/pages/App_Course'

import { App_Root } from './components/commons/App_Root'
import { App_Commons_Autogrow } from './components/commons/App_Commons_Autogrow'
import { App_Commons_Background } from './components/commons/App_Commons_Background'
import { App_Courses } from './components/courses/App_Courses'
import { App_Courses_Course } from './components/courses/App_Courses_Course'
import { App_Subscription } from './components/subscription/App_Subscription'
import { App_Navigation } from './components/navigation/App_Navigation'

@NgModule({
  declarations: [
    App_Index,
    App_Course,
    App_Root,
    App_Commons_Autogrow,
    App_Commons_Background,
    App_Courses,
    App_Courses_Course,
    App_Subscription,
    App_Navigation
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Module_Router
  ],
  providers: [],
  bootstrap: [App_Root]
})
export class App_Module {

}