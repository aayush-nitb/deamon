import { Component } from '@angular/core'

@Component({
    selector    : 'app-subscription',
    styleUrls   : ['./less/App_Subscription.less'],
    template    : `
        <img src="assets/subscription/mail.png" class="icon"/>
        <div class="content">
            <h2>Subscribe</h2>
            <input app-commons-autogrow="300px" width="200px"/>
        </div>
    `
})
export class App_Subscription {

}