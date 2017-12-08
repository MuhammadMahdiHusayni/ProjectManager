import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddWeeklyReportComponent } from '../../components/add-weekly-report/add-weekly-report';

@Component({
  selector: 'projectdetail',
  templateUrl: 'projectdetail.html'
})
export class ProjectdetailComponent {
	item:any;
	toggleThisWeek:boolean = true;
	toggleOverall:boolean = false;

	constructor(public navCtrl: NavController, private navParams: NavParams) {
		this.item = navParams.get('item');
	}

	addWeeklyReport(){
		this.navCtrl.push(AddWeeklyReportComponent, {item: this.item});
	}
	editWeeklyReport(){
		this.navCtrl.push(AddWeeklyReportComponent, {item: this.item});
	}
	editOverall(){
	}
}