import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(
    public modal: ModalService,
    public auth: AuthService,
    private afAuth: AngularFireAuth
  ){
  }

  openModal($event: Event){
    $event.preventDefault()  // prevent to call another nav option

    this.modal.toggleModal('auth')
  }
  async logout($event: Event){
    $event.preventDefault()

    await this.afAuth.signOut()
  }

}
