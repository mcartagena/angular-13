import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basics';
  name = 'Marcelo';
  imgURL = 'https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0'

  getName(){
    return this.name;
  }

  changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value;
  }
}