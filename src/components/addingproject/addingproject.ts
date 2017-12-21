import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ProjectService } from '../../app/services/project.service';

@Component({
  selector: 'addingproject',
  templateUrl: 'addingproject.html'
})
export class AddingprojectComponent {
	title: any;
	description: any;
	overallPlan: any;
	userId:any;
	postArray = [];
	
	constructor(private projectService: ProjectService, 
		private toastCtrl: ToastController,
		private storage: Storage) {}

	ionViewDidLoad(){
		this.storage.get('userId').then((val) => this.userId = val);
	}
	

	// TODO VALIDATION
	sendForm(){
		this.postArray = [];
		this.postArray.push({
			title: this.title, 
			description:this.description, 
			overallPlan:this.overallPlan,
			userId:this.userId
		})
		this.projectService.addProject(this.postArray)
		.then(
			res => {
				console.log('this is here');
				this.presentToast('Project was added successfully')
			},
			err => {
				console.log('error');
				this.presentToast('Cannot add project')
			}
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
