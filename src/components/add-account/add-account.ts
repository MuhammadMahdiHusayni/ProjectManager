import { Component } from '@angular/core';

/**
 * Generated class for the AddAccountComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'add-account',
  templateUrl: 'add-account.html'
})
export class AddAccountComponent {
	title: string;
	description: string;

	constructor() {

	}

	sendForm(){
		console.log('this.title', this.title);
		console.log('this.description', this.description);
	}

}
