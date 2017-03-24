import * as _ from 'underscore';
import { Component, Input } from '@angular/core'

@Component({
    selector    : 'app-commons-loader',
    templateUrl : './templates/App_Commons_Loader.html',
    styleUrls  : ['./less/App_Commons_Loader.less']
})
export class App_Commons_Loader {
    @Input('state') loading; 
}