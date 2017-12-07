import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListDetailComponent } from './list-detail';

@NgModule({
  declarations: [
    ListDetailComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ListDetailComponent
  ]
})
export class ListDetailComponentModule {}
