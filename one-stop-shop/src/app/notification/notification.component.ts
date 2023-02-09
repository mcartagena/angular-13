import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}">
              This webside uses cokies to provide better user experience.
              <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
            </div>`,
  styles: [".notification-div{margin: 10 px 0px; padding: 10px 20px; background-color: #fad7a0; text-align:center;}",
           "p{font-size: 12px;}",
           ".close{float: right; margin-top: -15px;}",
          ".fadeOut {visibility: hidden;opacity:0;transition:visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent {
  displayNotification: boolean = false;

  closeNotification(){
    this.displayNotification = true;
  }

}
