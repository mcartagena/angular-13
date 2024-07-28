import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertComponent } from '../../shared/alert/alert.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule,
    NgIf,
    AlertComponent,
   ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  }
  showAlert = false;
  alertMsg = "Please wait! We are logging you in.";
  alertColor = 'blue';
  inSubmission = false;
  constructor(private auth: AngularFireAuth){

  }

  async login(){
    this.showAlert = true;
    this.alertMsg = 'Please wait! We are logging you in.';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )
    } catch (error) {
      console.error(error)
      this.alertMsg = 'An unexpected error occurred. Please try again later'
      this.alertColor = 'red'
      this.inSubmission = false
      return
    }

    this.alertMsg = 'Success! You are now logged in.'
    this.alertColor = 'green'
  }
}
