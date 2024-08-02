import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent implements OnInit {

  videoOrder = '1'

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.videoOrder = params['sort'] === '2'? params['sort'] : '1'
    })
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