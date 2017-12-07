import { Component, ViewChild } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams } from 'ionic-angular';
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
	@ViewChild(Nav) nav: Nav;


  public signInForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public toastCtrl: ToastController) {

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
      this.createToast('Signed in with username: ' + this.signInForm.value.username).present();
      this.navCtrl.push(HomePage);

    }
  }
}
