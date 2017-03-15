import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { App_Courses } from './components/courses/App_Courses';
import { App_Subscription } from './components/subscription/App_Subscription';
import { App_Commons_Autogrow } from './components/commons/App_Commons_Autogrow'
import { App_Commons_Background } from './components/commons/App_Commons_Background'

@NgModule({
  declarations: [
    AppComponent,
    App_Courses,
    App_Subscription,
    App_Commons_Autogrow,
    App_Commons_Background
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
