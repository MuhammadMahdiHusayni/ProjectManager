import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddingprojectComponent } from '../../components/addingproject/addingproject';
import { ProjectdetailComponent } from '../../components/projectdetail/projectdetail';
import { ProjectService } from '../../app/services/project.service';
import { HttpClient } from '@angular/common/http';

// should I use ionic native http?

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
    this.projectService.getProject().then(data => this.projects = data);
  }
  
  addProject(){
  	this.navCtrl.push(AddingprojectComponent);
  }

  openProjectDetail(item){
    this.navCtrl.push(ProjectdetailComponent, {item});
  }
}

