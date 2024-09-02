import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClipService } from '../services/clip.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clips-list',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
  ],
  templateUrl: './clips-list.component.html',
  styleUrl: './clips-list.component.css'
})
export class ClipsListComponent implements OnInit, OnDestroy{

  constructor(public clipService: ClipService){
    this.clipService.getClips()
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = ()=>{
    const { scrollTop, offsetHeight } = document.documentElement
    const { innerHeight } = window

    const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight

    if(bottomOfWindow){
      this.clipService.getClips()
    }
  }
}
