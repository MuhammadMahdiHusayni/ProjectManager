import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AccountDetailComponent } from './account-detail';

@NgModule({
  declarations: [
    AccountDetailComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    AccountDetailComponent
  ]
})
export class AccountDetailComponentModule {}
