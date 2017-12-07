import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListDetailComponent } from '../../components/list-detail/list-detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  division: string[];
  x:number;


  myInput:string;
  shouldShowCancel:boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.division = ['Multimedia', 'Kebajikan', 'Komuniti', 'Patriotik']

    this.items = [];
    this.x = 3;
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Report ' + this.x,
        note: this.division[Math.floor(Math.random() * this.division.length)],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
      if(i == 4){
        --this.x;
      }
      if(i == 8){
        --this.x;
      }
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ListDetailComponent, {item: item});
  }

  onInput(event){

  }

  onCancel(event){
    
  }
}
