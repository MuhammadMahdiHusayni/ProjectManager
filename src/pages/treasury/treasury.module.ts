import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreasuryPage } from './treasury';

@NgModule({
  declarations: [
    TreasuryPage,
  ],
  imports: [
    IonicPageModule.forChild(TreasuryPage),
  ],
  exports: [
    TreasuryPage
  ]
})
export class TreasuryPageModule {}
