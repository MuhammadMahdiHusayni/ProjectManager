import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinuteMeetingPage } from './minute-meeting';

@NgModule({
  declarations: [
    MinuteMeetingPage,
  ],
  imports: [
    IonicPageModule.forChild(MinuteMeetingPage),
  ],
  exports: [
    MinuteMeetingPage
  ]
})
export class MinuteMeetingPageModule {}
