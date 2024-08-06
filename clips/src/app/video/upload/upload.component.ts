import { EventBlockerDirective } from './../../shared/directives/event-blocker.directive';
import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/compat/storage'
import { v4 as uuid } from 'uuid';
import { AlertComponent } from '../../shared/alert/alert.component';
import { PercentPipe } from '@angular/common';
import { last } from 'rxjs';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    EventBlockerDirective,
    NgClass,
    NgIf,
    ReactiveFormsModule,
    InputComponent,
    AngularFireStorageModule,
    AlertComponent,
    PercentPipe,
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css',
})
export class UploadComponent implements OnInit {
  isDragOver = false;
  nextStep = false;
  file: File | null = null;

  title = new FormControl('', {
    validators: [Validators.required, Validators.minLength(3)],
    nonNullable: true,
  });

  uploadForm = new FormGroup({
    title: this.title,
  });

  showAlert = false;
  alertMsg = 'Please wait! Your clip is being uploaded.';
  alertColor = 'blue';
  inSubmission = false;

  percentage = 0
  showPercentage = false

  constructor(private storage: AngularFireStorage){

  }
  ngOnInit(): void {}

  storeFile($event: Event) {
    this.isDragOver = false;

    this.file = ($event as DragEvent).dataTransfer?.files.item(0) ?? null;

    if (!this.file || this.file.type !== 'video/mp4') {
      return;
    }

    this.title.setValue(this.file.name.replace(/\.[^/.]+$/, ''));

    this.nextStep = true;
  }

  uploadFile(){
    const clipFileName = uuid()
    const clipPath = `clips/${clipFileName}.mp4`

    this.showAlert = true;
    this.alertMsg = 'Please wait! Your clip is being uploaded.';
    this.alertColor = 'blue';
    this.inSubmission = true
    this.showPercentage = true


    const task = this.storage.upload(clipPath,this.file)

    task.percentageChanges().subscribe(progress => {
      this.percentage = progress as number / 100
    })

    task.snapshotChanges().pipe(
      last()
    ).subscribe({
      next: (snapshot) => {
        this.alertColor = 'green'
        this.alertMsg = 'Success! Your clip is now ready to share with the world.'
        this.showPercentage = false
      },
      error: (error) => {
        this.alertColor = 'red'
        this.alertMsg = 'Upload failed! Please try again later.'
        this.inSubmission = true
        this.showPercentage = false
        console.error(error)
      }
    })
  }
}
