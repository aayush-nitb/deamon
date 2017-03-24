import { NgModule } from '@angular/core'
import * as primeng from 'primeng/primeng'

const Components = [
    primeng.ButtonModule,
    primeng.InputTextModule,
    primeng.PanelModule
];

@NgModule({
    imports: Components,
    exports: Components
})
export class Module_Primeng {

}