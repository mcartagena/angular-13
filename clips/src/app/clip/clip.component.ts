import videojs from 'video.js';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, RouterLink, Params } from '@angular/router';
import { ClipsListComponent } from '../clips-list/clips-list.component';
import IClip from '../models/clip.model';
import { FbTimestampPipe } from '../pipes/fb-timestamp.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clip',
  standalone: true,
  imports: [RouterLink, ClipsListComponent, FbTimestampPipe],
  templateUrl: './clip.component.html',
  styleUrl: './clip.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe],
})
export class ClipComponent implements OnInit {
  @ViewChild('videoPlayer', { static: true }) target?: ElementRef;
  player?: any;
  clip?: IClip;

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.player = videojs(this.target?.nativeElement);

    this.route.data.subscribe((data) => {
      this.clip = data.clip as IClip;
      this.player?.src({
        src: this.clip.url,
        type: 'video/mp4',
      });
    });
  }
}
