import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core'

@Directive({
    selector    : '[app-commons-background]'
})
export class App_Commons_Background implements OnInit {

    @Input('opacity') opacity: string;
    @Input('app-commons-background') url: string;

    constructor(private el: ElementRef, private renderer: Renderer) {
        //noop
    }
    ngOnInit() {
        let background = this.renderer.createElement(this.el.nativeElement, 'div');
        Object.assign(this.el.nativeElement.style, {
            'position': 'relative'
        });
        Object.assign(background.style, {
            'position': 'absolute',
            'left': 0,
            'top': 0,
            'right': 0,
            'bottom': 0,
            'background': `url(${this.url}) no-repeat`,
            'background-size': '100% 100%',
            'opacity': this.opacity || 1,
            'z-index': '-1'
        });
    }
}