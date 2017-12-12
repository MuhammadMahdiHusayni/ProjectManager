import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MinuteMeetingPage } from '../pages/minute-meeting/minute-meeting';
import { TreasuryPage } from '../pages/treasury/treasury';

import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = LoginPage;
  rootPage: any;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Project Management', icon: 'briefcase', component: HomePage },
      { title: 'Minute Meeting', icon: 'document', component: MinuteMeetingPage },
      { title: 'Treasury', icon: 'ios-cash-outline', component: TreasuryPage },
      { title: 'Archive', icon: 'archive', component: ListPage }
    ];

    firebase.initializeApp({
      apiKey: "AIzaSyCZr3i3NMM3XTvSnyma06ag4Fg1fuxNVfY",
      authDomain: "reporting-912e1.firebaseapp.com",
      databaseURL: "https://reporting-912e1.firebaseio.com",
      projectId: "reporting-912e1",
      storageBucket: "reporting-912e1.appspot.com",
      messagingSenderId: "119234890140"
    });

    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
    if (!user) {
      this.rootPage = LoginPage;
      // unsubscribe(); //this use case when want to stop observe auth status (if there is change in auth in app)
    } else { 
      this.rootPage = HomePage;
      // unsubscribe();
    }
  });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    this.logoutUser();
    this.openPage({ component: LoginPage });
  }

  logoutUser():Promise<void> {
    console.log('signout');
    return firebase.auth().signOut();
  }

}
