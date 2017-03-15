import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core'

const DEFAULT_WIDTH = '200px';
const GROWN_WIDTH = '400px';

@Directive({
    selector    : '[app-commons-autogrow]',
    host        : {
        '(focus)'   : 'grow()',
        '(blur)'    : 'shrink()'
    }
})
export class App_Commons_Autogrow implements OnInit {

    @Input('width') defaultWidth: string;
    @Input('app-commons-autogrow') grownWidth: string;

    constructor(private el: ElementRef, private renderer: Renderer) {
        //noop
    }
    ngOnInit() {
        this.shrink();
    }
    grow() {
        this.el.nativeElement.style.width = this.grownWidth || GROWN_WIDTH;
    }
    shrink() {
        this.el.nativeElement.style.width = this.defaultWidth || DEFAULT_WIDTH;
    }
}