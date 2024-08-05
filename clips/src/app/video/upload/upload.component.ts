import { EventBlockerDirective } from './../../shared/directives/event-blocker.directive';
import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    EventBlockerDirective,
    NgClass,
    NgIf,
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  isDragOver = false
  nextStep = false
  file: File | null = null

  storeFile($event: Event){
    this.isDragOver = false

    this.file = ($event as DragEvent).dataTransfer?.files.item(0) ?? null

    if(!this.file || this.file.type !== 'video/mp4'){
      return
    }

    this.nextStep = true

  }

}
