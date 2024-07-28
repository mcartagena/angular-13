import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ NgClass ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit, OnDestroy{
  @Input() modalID = ''

  constructor(public modal: ModalService, public el: ElementRef){
  }
  ngOnDestroy(): void {
    document.body.removeChild(this.el.nativeElement)
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  closeModal(){
    this.modal.toggleModal(this.modalID)
  }

}
