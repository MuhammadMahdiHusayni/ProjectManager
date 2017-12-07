import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'meetingdetail',
  templateUrl: 'meetingdetail.html'
})
export class MeetingdetailComponent {
	id:number;
	title:string;
	  diseases = [
    { title: "Attendance", color:"four", items:[{name:"Afiq"},{name:"Mat"}, {name:"Arif"}]},
    { title: "Agenda Items", color:"five", items:[{name:"Agenda 1"},{name:"Agenda 12"}, {name:"Agenda 14"}]},
    { title: "Action Items", color:"one", items:[{name:"Action 1"},{name:"Action 12"}, {name:"Action 13"}]},
    { title: "Other Notes", color:"three", items:[{name:"This is other note"}]}
  ];
  toggleDetail:boolean;

  shownGroup = null;



  constructor(public navCtrl: NavController, private navParams: NavParams) {
		this.id = navParams.get('id');
  	this.title = navParams.get('title');
    this.toggleDetail = true;
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

}
