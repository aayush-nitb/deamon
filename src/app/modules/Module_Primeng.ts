import { NgModule } from '@angular/core'
import * as primeng from 'primeng/primeng'

const Components = [
    primeng.ButtonModule,
    primeng.InputTextModule,
    primeng.PanelModule,
    primeng.InplaceModule
];

@NgModule({
    imports: Components,
    exports: Components
})
export class Module_Primeng {

}