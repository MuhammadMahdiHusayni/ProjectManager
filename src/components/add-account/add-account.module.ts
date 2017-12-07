import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AddAccountComponent } from './add-account';

@NgModule({
  declarations: [
    AddAccountComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    AddAccountComponent
  ]
})
export class AddAccountComponentModule {}
