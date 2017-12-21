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
	shownGroup:boolean;

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
				let viewArray = [];
				

				for(let i = 0; i < this.report.length; i++){
					temp = count > this.report[i].reportCount ? temp : this.report[i];
					viewArray[this.report[i].reportCount-1] = this.report[i];
				}

				this.report = viewArray.reverse();
				this.latestReport = temp;
				this.latestPlan = temp.nextPlan;
				this.latestReportNumber = temp.reportCount;
			}else{
				this.latestPlan = 'Tiada plan terkini untuk projek ini.'
			}
			
		});
	}

	toggleGroup(group) {
		if (this.isGroupShown(group)) {
			this.shownGroup = null;
		} else {
			this.shownGroup = group;
		}
	};
	isGroupShown(group) {
		return this.shownGroup === group;
	};

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