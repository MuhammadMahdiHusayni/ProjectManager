import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddAccountComponent } from '../../components/add-account/add-account';

import { AccountDetailComponent } from '../../components/account-detail/account-detail';

@IonicPage()
@Component({
  selector: 'page-treasury',
  templateUrl: 'treasury.html',
})
export class TreasuryPage {
	data = [{
    id: 1,
		title: "ICLUB",
		balance:356,
    	color:"two"
	},{
    	id: 2,
		title: "Charity",
		balance:1200,
    	color:"four"
	}]
	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}

   addAccount(){
   	this.navCtrl.push(AddAccountComponent);
   }

   openAccountDetail(id, title, balance){
	this.navCtrl.push(AccountDetailComponent, {id, title, balance});
   }

   addIncome(){

   }

   addExpense(){
     
   }

}
