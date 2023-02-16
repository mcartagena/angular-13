import { OnInit } from '@angular/core';
import { ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit{

  constructor(private element: ElementRef, private rendered: Renderer2) { }
  ngOnInit(): void {
    this.background = this.defaultColor;
    this.title = this.customTitle;
  }

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterhighlight') highlightColor: string = 'pink';
  @Input() customTitle: string = 'this is title';

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('title') title: string = this.customTitle;

  @HostListener('mouseenter') mouseenter(){
    this.background = this.highlightColor;
    this.border = 'red 2px solid';
  }
  @HostListener('mouseleave') mouseleave(){
    this.background = this.defaultColor;
    this.border = 'none';
  }

}
