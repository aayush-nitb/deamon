import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'
import { environment } from './environments/environment'
import { App_Module } from './app/App_Module'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(App_Module);
