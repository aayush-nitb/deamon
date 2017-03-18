import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { App_Index } from 'app/pages/App_Index'
import { App_Course } from 'app/pages/App_Course'

const routes: Routes = [
    { path: '', component: App_Index },
    { path: 'course/:name', component: App_Course }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class Module_Router {

}