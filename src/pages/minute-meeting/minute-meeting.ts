import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { MeetingdetailComponent } from '../../components/meetingdetail/meetingdetail';

@IonicPage()
@Component({
  selector: 'page-minute-meeting',
  templateUrl: 'minute-meeting.html',
})
export class MinuteMeetingPage {
	data = [{
    	id: 1,
		date: "3/11/2017",
		location:"Sg Pinang",
		title:"Tri-Monthly Meeting",
    color:"three"
	},{
    	id: 2,
		date: "4/10/2017",
		location:"Uncle Boy House",
		title:"Emergency Meeting",
    color:"one"
	}]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  addProject(){
    
  }

  openProjectDetail(id, title){
    this.navCtrl.push(MeetingdetailComponent, {id, title});
  }

}
