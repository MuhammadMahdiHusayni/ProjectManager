import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule }    from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MinuteMeetingPage } from '../pages/minute-meeting/minute-meeting';
import { TreasuryPage } from '../pages/treasury/treasury';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';


import { AddingprojectComponent } from '../components/addingproject/addingproject';
import { ProjectdetailComponent } from '../components/projectdetail/projectdetail';
import { AddWeeklyReportComponent } from '../components/add-weekly-report/add-weekly-report';
import { MeetingdetailComponent } from '../components/meetingdetail/meetingdetail';
import { AddAccountComponent } from '../components/add-account/add-account';
import { AccountDetailComponent } from '../components/account-detail/account-detail';
import { ListDetailComponent } from '../components/list-detail/list-detail';

import { ProjectService } from './services/project.service';



import { ElasticModule } from 'angular2-elastic';
import { AuthProvider } from '../providers/auth/auth';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    HomePage,
    ListPage,
    MinuteMeetingPage,
    TreasuryPage,
    AddingprojectComponent,
    ProjectdetailComponent,
    AddWeeklyReportComponent,
    MeetingdetailComponent,
    AddAccountComponent,
    AccountDetailComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ElasticModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    HomePage,
    ListPage,
    MinuteMeetingPage,
    TreasuryPage,
    AddingprojectComponent,
    ProjectdetailComponent,
    AddWeeklyReportComponent,
    MeetingdetailComponent,
    AddAccountComponent,
    AccountDetailComponent,
    ListDetailComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProjectService,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
