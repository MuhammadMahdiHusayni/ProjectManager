import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { ProjectService } from '../../app/services/project.service';

@Component({
  selector: 'add-weekly-report',
  templateUrl: 'add-weekly-report.html'
})
export class AddWeeklyReportComponent {
  report:string;
  plan:string;
  toggle:boolean = false;
  item:any;
  latestPlan:any;
  latestReportNumber:any;
  editFlag:boolean = true;
  latestReport:any;

  constructor(private projectService: ProjectService, 
                private toastCtrl: ToastController,
                private navParams: NavParams) {
    console.log("navParams.get('edit')", navParams.get('edit'));
    console.log("navParams.get('latestPlan')", navParams.get('latestPlan'));
    console.log("navParams.get('latestReport')", navParams.get('latestReport'));
    console.log("navParams.get('latestReportNumber')", navParams.get('latestReportNumber'));
    this.latestReport = navParams.get('latestReport');
    this.editFlag = navParams.get('edit');
    if(this.editFlag){
      this.plan = navParams.get('latestPlan');
      this.report = navParams.get('latestReport').description;
    }
    this.latestPlan = navParams.get('latestPlan');
    this.latestReportNumber = navParams.get('latestReportNumber');
  }

  sendForm(){
    let postArray = [{description: this.report, nextPlan:this.plan, projectId:this.latestReport.projectId}]
    this.projectService.saveNextPlan(postArray)
    .then(
      res => {this.presentToast('Project was added successfully')},
      err => {this.presentToast('Cannot add project')}
    )
  }

    // TODO GREEN WHEN OK RED WHEN NOT OK
    presentToast(msg:string) {
      let toast = this.toastCtrl.create({
          message: msg,
          duration: 2000,
          position: 'top',
          showCloseButton: true
      });

      // TODO WHEN SUCCESS GO SOMEWHERE
      toast.onDidDismiss(() => {
         console.log('Dismissed toast');
      });
      toast.present();
    }
}
