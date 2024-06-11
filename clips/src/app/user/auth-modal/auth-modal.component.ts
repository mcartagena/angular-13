import { ModalService } from '../../services/modal.service';
import { ModalComponent } from './../../shared/modal/modal.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [ ModalComponent ],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent implements OnInit{

  constructor(public modal: ModalService){

  }

  ngOnInit(): void{
    this.modal.register('auth')
  }

}
