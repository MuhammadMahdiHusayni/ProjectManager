import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';

// TODO AuthProvider
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [FormBuilder]
})
export class LoginPage {

  public signInForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public appCtrl: App) {

    // building the form
    this.signInForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  createToast(message: string) {
    return this.toastCtrl.create({
      message,
      duration: 3000
    })
  }

  signInFormSubmit(){
    if (!this.signInForm.valid) {
      this.createToast('Ooops, form not valid...').present();
      return
    } else {
      //TODO CHECK WITH DATABASE VALID OR NOT
      this.createToast('Signed in with username: ' + this.signInForm.value.username).present();

      // (getRootNav) is deprecated and will be removed in the next major release. Use getRootNavById instead.
      // change when deprecated
      this.appCtrl.getRootNav().setRoot(HomePage);
    }
  }
}
