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


  constructor(private projectService: ProjectService, 
                private toastCtrl: ToastController,
                private navParams: NavParams) {
    if(navParams.get('item')){
      this.report = navParams.get('item').body;
      this.plan = navParams.get('item').body;
    }
  }

  // TODO VALIDATION
  sendForm(){
    this.projectService.saveNextPlan({title: this.report, description:this.plan})
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
