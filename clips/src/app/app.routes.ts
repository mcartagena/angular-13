import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ManageComponent } from './video/manage/manage.component';

export const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'manage',
  component: ManageComponent,
  data: {
    authOnly: true
  }
}
];
