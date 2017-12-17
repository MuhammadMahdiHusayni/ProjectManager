import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddingprojectComponent } from '../../components/addingproject/addingproject';
import { ProjectdetailComponent } from '../../components/projectdetail/projectdetail';
import { ProjectService } from '../../app/services/project.service';
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase';

// should I use ionic native http?
// test
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpClient]
})
export class HomePage {
	projects: any;

  constructor(public navCtrl: NavController, 
    private projectService: ProjectService) { }

  ionViewDidLoad(){
    var user = firebase.auth().currentUser;
    this.projectService.getProject(user).then(data => this.projects = data);
  }
  
  addProject(){
  	this.navCtrl.push(AddingprojectComponent);
  }

  openProjectDetail(item){
    console.log('item', item);
    this.navCtrl.push(ProjectdetailComponent, {item});
  }
}

