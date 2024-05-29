import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';
import { TitleCasePipe, DatePipe,
  CurrencyPipe, DecimalPipe, JsonPipe } from "@angular/common"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    PostComponent,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basics';
  name = 'marcelo cartagena';
  imgURL = 'https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0';
  currentDate = new Date();
  cost = 2000;
  temperature = 25.3;
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  };

  getName(){
    return this.name;
  }

  changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value;
  }
  logImg(event: string){
    console.log(event);
  }
}
