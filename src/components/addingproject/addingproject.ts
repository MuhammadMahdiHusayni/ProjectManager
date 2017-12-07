import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

import { ProjectService } from '../../app/services/project.service';

@Component({
  selector: 'addingproject',
  templateUrl: 'addingproject.html'
})
export class AddingprojectComponent {
	title: any;
	description: any;
	
	constructor(private projectService: ProjectService, private toastCtrl: ToastController) {}

	// TODO VALIDATION
	sendForm(){
		this.projectService.addProject({title: this.title, description:this.description})
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
