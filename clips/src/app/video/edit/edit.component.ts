import { Component, OnDestroy, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ModalService } from '../../services/modal.service';
import IClip from '../../models/clip.model';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { ClipService } from '../../services/clip.service';
import { NgClass, NgIf } from '@angular/common';
import { AlertComponent } from '../../shared/alert/alert.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    ModalComponent,
    InputComponent,
    ReactiveFormsModule,
    NgClass,
    NgIf,
    AlertComponent
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit, OnDestroy, OnChanges{
  @Input() activeClip: IClip | null = null
  @Output() update = new EventEmitter()
  clipID = new FormControl('',{
    nonNullable: true
  })
  title = new FormControl('', {
    validators: [Validators.required, Validators.minLength(3)],
    nonNullable: true,
  });

  editForm = new FormGroup({
    title: this.title,
    id: this.clipID
  });
  inSubmission = false
  showAlert = false
  alertColor = "blue"
  alertMsg = "Please wait! Updating Clip."


  constructor(private modal: ModalService,
    private clipService: ClipService
  ){

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(!this.activeClip){
      return
    }

    this.inSubmission = false
    this.showAlert = false

    this.clipID.setValue(this.activeClip.docID as string)
    this.title.setValue(this.activeClip.title)
  }
  ngOnDestroy(): void {
    this.modal.unregister('editClip')
  }
  ngOnInit(): void {
    this.modal.register('editClip')
  }

  async submit(){
    if(!this.activeClip){
      return
    }
    this.inSubmission = true
    this.showAlert = true
    this.alertColor = "blue"
    this.alertMsg = "Please wait! Updating Clip."

    try {
      await this.clipService.updateClip(this.clipID.value, this.title.value)
    } catch (error) {
      this.inSubmission = false
      this.alertColor = 'red'
      this.alertMsg = 'Something went wrong. Try again later'

      return
    }

    this.activeClip.title = this.title.value
    this.update.emit(this.activeClip)

    this.inSubmission = false
    this.alertColor = 'green'
    this.alertMsg = 'Success!'
  }

}
