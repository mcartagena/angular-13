import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Params } from '@angular/router';

@Component({
  selector: 'app-clip',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './clip.component.html',
  styleUrl: './clip.component.css'
})
export class ClipComponent implements OnInit {
  id = ''

  constructor(public route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id
    })
  }

}
