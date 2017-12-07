import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'account-detail',
  templateUrl: 'account-detail.html'
})
export class AccountDetailComponent {
	id:number;
	title:string;
	balance:number;
	items = [
	{
		type:1,
		description:"Afiq pay July fees",
		amount:15
	},
	{
		type:1,
		description:"Mahdi pay July fees",
		amount:15
	},
	{
		type:2,
		description:"Pay electric bill",
		amount:75
	},
	{
		type:2,
		description:"Pay Ustaz",
		amount:200
	},
	{
		type:1,
		description:"Donation",
		amount:300
	},
	{
		type:1,
		description:"Mat pay July fees",
		amount:15
	},
	]
  constructor(public navCtrl: NavController, private navParams: NavParams) {
		this.id = navParams.get('id');
	  	this.title = navParams.get('title');
	  	this.balance = navParams.get('balance');
  }


}
