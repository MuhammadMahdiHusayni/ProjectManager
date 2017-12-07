import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'list-detail',
  templateUrl: 'list-detail.html'
})
export class ListDetailComponent {


  constructor(public navCtrl: NavController, private navParams: NavParams) {
  }

}
