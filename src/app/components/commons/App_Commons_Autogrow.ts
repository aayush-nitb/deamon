import { Directive, ElementRef, Renderer } from '@angular/core'

@Directive({
    selector    : '[app-commons-autogrow]',
    host        : {
        '(focus)'   : 'grow()',
        '(blur)'    : 'shrink()'
    }
})
export class App_Commons_Autogrow {
    constructor(private el: ElementRef, private renderer: Renderer) {
        
    }
    grow() {
        this.renderer.setElementStyle(this.el, 'width', '200');
    }
    shrink() {
        this.renderer.setElementStyle(this.el, 'width', '100');
    }
}