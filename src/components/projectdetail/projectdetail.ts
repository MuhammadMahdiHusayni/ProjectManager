import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddWeeklyReportComponent } from '../../components/add-weekly-report/add-weekly-report';
import { ProjectService } from '../../app/services/project.service';

@Component({
  selector: 'projectdetail',
  templateUrl: 'projectdetail.html'
})
export class ProjectdetailComponent {
	item:any;
	report:any;
	latestReport:any;
	toggleThisWeek:boolean = true;
	toggleOverall:boolean = false;

	constructor(public navCtrl: NavController, 
		private navParams: NavParams,
		private projectService: ProjectService) {
		this.item = navParams.get('item');
	}

	ionViewDidLoad(){
		this.projectService.getReport(this.item.projectId).then(data => this.report = data);
	}

	addWeeklyReport(){
		console.log(this.report)
		this.navCtrl.push(AddWeeklyReportComponent, {item: this.report});
	}
	editWeeklyReport(){
		this.navCtrl.push(AddWeeklyReportComponent, {item: this.report});
	}
	editOverall(){
	}
}