import { Component, ViewChild } from '@angular/core';
import { App, Loading, LoadingController, AlertController,  IonicPage, NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [FormBuilder]
})
export class LoginPage {

  public signInForm: FormGroup;
  public loading: Loading;

  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController, 
    private formBuilder: FormBuilder,
    public toastCtrl: ToastController, 
    public authProvider: AuthProvider,
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
          this.authProvider.loginUser(this.signInForm.value.username, this.signInForm.value.password)
            .then( authData => {
              this.loading.dismiss().then( () => {
                console.log(authData);
                this.navCtrl.setRoot(HomePage);
                this.createToast('Signed in with username: ' + this.signInForm.value.username).present();
              });
            }, error => {
              this.loading.dismiss().then( () => {
                let alert = this.alertCtrl.create({
                message: error.message,
                buttons: [{
                  text: "Ok",
                  role: 'cancel'
                }]
              });
              alert.present();
              });
            });
          this.loading = this.loadingCtrl.create();
          this.loading.present();


      //TODO CHECK WITH DATABASE VALID OR NOT
      

      // (getRootNav) is deprecated and will be removed in the next major release. Use getRootNavById instead.
      // change when deprecated
      // this.appCtrl.getRootNav().setRoot(HomePage);
    }
  }

  goToSignup(): void { 
    this.navCtrl.push(SignupPage); 
  }
}
