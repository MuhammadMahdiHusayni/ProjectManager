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
  toggleDetail:boolean = true;
  toggleAttendance:boolean = false;
  toggleAgenda:boolean = false;
  toggleAction:boolean = false;
  toggleNote:boolean = false;

  shownGroup = null;
  meeting:any;


  constructor(public navCtrl: NavController, private navParams: NavParams) {
      this.meeting = navParams.get('item');
      console.log('meeting', this.meeting);
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
