import { Component } from '@angular/core'

@Component({
    selector    : 'app-subscription',
    styleUrls   : ['./less/App_Subscription.less'],
    template    : `
        <h2>Subscribe</h2>
        <input app-commons-autogrow="300px" width="100px"/>
    `
})
export class App_Subscription {

}