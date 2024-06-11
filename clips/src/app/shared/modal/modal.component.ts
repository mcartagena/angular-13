import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ NgClass ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() modalID = ''

  constructor(public modal: ModalService){
  }

  closeModal(){
    this.modal.toggleModal(this.modalID)
  }

}
