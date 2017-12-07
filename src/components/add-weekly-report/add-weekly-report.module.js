var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AddWeeklyReportComponent } from './add-weekly-report';
var AddWeeklyReportComponentModule = /** @class */ (function () {
    function AddWeeklyReportComponentModule() {
    }
    AddWeeklyReportComponentModule = __decorate([
        NgModule({
            declarations: [
                AddWeeklyReportComponent,
            ],
            imports: [
                IonicModule,
            ],
            exports: [
                AddWeeklyReportComponent
            ]
        })
    ], AddWeeklyReportComponentModule);
    return AddWeeklyReportComponentModule;
}());
export { AddWeeklyReportComponentModule };
//# sourceMappingURL=add-weekly-report.module.js.map