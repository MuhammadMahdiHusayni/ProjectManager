import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { MeetingdetailComponent } from '../../components/meetingdetail/meetingdetail';

@IonicPage()
@Component({
  selector: 'page-minute-meeting',
  templateUrl: 'minute-meeting.html',
})
export class MinuteMeetingPage {
  meeting = [{
    meetingId: 1,
    meetingDate: "3/11/2017",
    title:"Tri-Monthly Meeting",
    meetingTime:"9.30pm",
    meetingLocation:"Sg Pinang",
    attendanceList:[{name:"Afiq", id:1},{name:"Mat", id:2}, {name:"Arif", id:3}],
    agendaList:[{agenda:"Agenda 1"},{agenda:"Agenda 12"}, {agenda:"Agenda 14"}],
    actionList:[{action:"Action 1"},{action:"Action 12"}, {action:"Action 13"}],
    note:"This is the note field",
    color:"three"

  },{
    meetingId: 2,
    meetingDate: "4/10/2017",
    title:"Emergency Meeting",
    meetingTime:"9.30pm",
    meetingLocation:"Uncle Boy House",
    attendanceList:[{name:"Afiq", id:1},{name:"Mat", id:2}, {name:"Arif", id:3}],
    agendaList:[{agenda:"Agenda 1"},{agenda:"Agenda 12"}, {agenda:"Agenda 14"}],
    actionList:[{action:"Action 1"},{action:"Action 12"}, {action:"Action 13"}],
    note:"This is the note field",
    color:"one"

  }]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  addProject(){
    
  }

  openProjectDetail(item){ 
    console.log('item', item);
    this.navCtrl.push(MeetingdetailComponent, {item});
  }

}
