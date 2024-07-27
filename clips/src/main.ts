import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { environment } from '../src/environments/environment';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

firebase.initializeApp(environment.firebase);

let appInit = false

firebase.auth().onAuthStateChanged(() => {
  if (!appInit) {
    bootstrapApplication(AppComponent, appConfig).catch((err) =>
      console.error(err)
    );
  }

  appInit = true
});
