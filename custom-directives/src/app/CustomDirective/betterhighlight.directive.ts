import { ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  constructor(private element: ElementRef, private rendered: Renderer2) { }

  @HostBinding('style.backgroundColor') background: string = 'transparent';
  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter') mouseenter(){
    this.background = 'pink';
    this.border = 'red 2px solid';
  }
  @HostListener('mouseleave') mouseleave(){
    this.background = 'transparent';
    this.border = 'none';
  }

}
