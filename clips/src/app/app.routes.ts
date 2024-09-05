import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ManageComponent } from './video/manage/manage.component';
import { UploadComponent } from './video/upload/upload.component';
import { ClipComponent } from './clip/clip.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { ClipService } from './services/clip.service';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('/')

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
    authOnly: true,
    authGuardPipe: redirectUnauthorizedToHome
  },
  canActivate: [AngularFireAuthGuard],
  loadComponent: () => import('./video/manage/manage.component').then(m => m.ManageComponent)
},
{
  path: 'manage-clips',
  redirectTo: 'manage'
},
{
  path: 'upload',
  component: UploadComponent,
  data: {
    authOnly: true,
    authGuardPipe: redirectUnauthorizedToHome
  },
  canActivate: [AngularFireAuthGuard]
},
{
  path: 'clip/:id',
  component: ClipComponent,
  resolve: {
    clip: ClipService
  }
},
{
  path: '**',
  component: NotFoundComponent
}
];
