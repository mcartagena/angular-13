import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ NgClass ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{
  @Input() modalID = ''

  constructor(public modal: ModalService, public el: ElementRef){
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  closeModal(){
    this.modal.toggleModal(this.modalID)
  }

}
