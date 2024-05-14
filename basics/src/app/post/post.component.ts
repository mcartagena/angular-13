import {
  Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, SimpleChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor(){
    console.log('constructed has been called', this.postImg);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChange called');
  }
  ngDoCheck(): void {
    console.log('DoCheck called');
  }
  ngOnInit(): void {
    console.log('onInit is happening', this.postImg);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
  }
  ngOnDestroy(): void {
    console.log('OnDestroy has been called')
  }
}
