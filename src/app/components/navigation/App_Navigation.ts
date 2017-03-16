import { Component } from '@angular/core'
import { Location } from '@angular/common'

@Component({
    selector    : 'app-navigation',
    styleUrls   : ['./less/App_Navigation.less'],
    template    :`
        <button (click)="location.back()">Back</button>
        <button routerLink="">Home</button>
    `
})
export class App_Navigation {
    constructor(private location: Location) {
        //noop
    }
}