import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl(''),
      password: new FormControl(''),
      confirm_password: new FormControl(''),
      phoneNumber: new FormControl(''),
    });
  }
}
