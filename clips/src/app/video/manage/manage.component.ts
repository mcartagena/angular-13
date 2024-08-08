import { ClipService } from './../../servicves/clip.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import IClip from '../../models/clip.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [
    RouterModule,
    NgFor,
  ],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent implements OnInit {

  videoOrder = '1'
  clips: IClip[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clipService: ClipService
  ){

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.videoOrder = params['sort'] === '2'? params['sort'] : '1'
    })
    this.clipService.getUserClips().subscribe(docs =>{
      this.clips = []
      docs.forEach(doc => {
        this.clips.push({
          docID: doc.id,
          ...doc.data()
        })
      })
    } )
  }

  sort(event: Event){
    const { value } = (event.target as HTMLSelectElement)

    this.router.navigate([],
      {
        relativeTo: this.route,
        queryParams: {
          sort: value
        }
      }
    )
  }

}
