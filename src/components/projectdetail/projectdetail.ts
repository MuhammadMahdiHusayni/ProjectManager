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
	latestPlan:any;
	toggleThisWeek:boolean = true;
	toggleOverall:boolean = false;
	latestReportNumber:any;
	latestReport:any;

	constructor(public navCtrl: NavController, 
		private navParams: NavParams,
		private projectService: ProjectService) {
		this.item = navParams.get('item');
	}

	ionViewDidLoad(){
		this.projectService.getReport(this.item.projectId).then(data => {
			this.report = data;
			if(this.report.length > 0){
				let count = 0;
				let temp;
				for(let i = 0; i < this.report.length; i++){
					temp = count > this.report[i].reportCount ? temp : this.report[i];
				}
				this.latestReport = temp;
				this.latestPlan = temp.nextPlan;
				this.latestReportNumber = temp.reportCount;
			}else{
				this.latestPlan = 'Tiada plan terkini untuk projek ini.'
			}
			
		});
	}

	addWeeklyReport(){
		this.navCtrl.push(AddWeeklyReportComponent, 
			{
				latestPlan:this.latestPlan, 
				latestReport:this.latestReport, 
				latestReportNumber:this.latestReportNumber,
				edit:false
			}
		);
	}
	editWeeklyReport(){
		this.navCtrl.push(AddWeeklyReportComponent, 
			{
				latestPlan:this.latestPlan, 
				latestReport:this.latestReport, 
				latestReportNumber:this.latestReportNumber,
				edit:true
			}
		);
	}
	editOverall(){
	}
}