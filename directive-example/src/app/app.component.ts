import { Component } from '@angular/core';

interface Video {
  title: string;
  share: number;
  likes: number;
  dislikes: number;
  thumbnail: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-example';

  videos= [
    {title: 'My video 1', share: 415, likes: 257, dislikes: 12, thumbnail: 'assets/images/image1.jpg'},
    {title: 'My video 2', share: 215, likes: 325, dislikes: 12, thumbnail: 'assets/images/image2.jpg'},
    {title: 'My video 3', share: 513, likes: 105, dislikes: 12, thumbnail: 'assets/images/image3.jpg'}
  ]

  mostLikedVideo = this.getmostlikedVideo();

  getmostlikedVideo(): Video{
    let videoCopy = [...this.videos];
    return videoCopy.sort((curr, next) => next.likes - curr.likes)[0];
  }
}
