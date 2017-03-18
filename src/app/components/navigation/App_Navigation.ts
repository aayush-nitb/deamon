import { Component } from '@angular/core'
import { Location } from '@angular/common'

@Component({
    selector    : 'app-navigation',
    styleUrls   : ['./less/App_Navigation.less'],
    templateUrl : './templates/App_Navigation.html'
})
export class App_Navigation {
    constructor(private location: Location) {
        //noop
    }
}