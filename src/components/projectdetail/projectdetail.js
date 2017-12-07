var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddWeeklyReportComponent } from '../../components/add-weekly-report/add-weekly-report';
var ProjectdetailComponent = /** @class */ (function () {
    function ProjectdetailComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.get('item');
        console.log('this.item', this.item);
        this.toggleThisWeek = true;
        this.toggleOverall = false;
        //TODO GET project detail from id
    }
    ProjectdetailComponent.prototype.addWeeklyReport = function () {
        this.navCtrl.push(AddWeeklyReportComponent);
    };
    ProjectdetailComponent = __decorate([
        Component({
            selector: 'projectdetail',
            templateUrl: 'projectdetail.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ProjectdetailComponent);
    return ProjectdetailComponent;
}());
export { ProjectdetailComponent };
//# sourceMappingURL=projectdetail.js.map