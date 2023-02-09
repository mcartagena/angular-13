import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, AfterContentInit {

  @ContentChild('paragraph') paragraphEl!: ElementRef<HTMLParagraphElement>;

  ngAfterContentInit(): void {
    console.log(this.paragraphEl.nativeElement.textContent)
    this.paragraphEl.nativeElement.textContent = 'This is new paragraph value';
  }

  ngOnInit(): void {
    console.log(this.paragraphEl)
  }

}
