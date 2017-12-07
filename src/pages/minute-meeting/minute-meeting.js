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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeetingdetailComponent } from '../../components/meetingdetail/meetingdetail';
var MinuteMeetingPage = /** @class */ (function () {
    function MinuteMeetingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [{
                id: 1,
                date: "3/11/2017",
                location: "Sg Pinang",
                title: "Tri-Monthly Meeting",
                color: "three"
            }, {
                id: 2,
                date: "4/10/2017",
                location: "Uncle Boy House",
                title: "Emergency Meeting",
                color: "one"
            }];
    }
    MinuteMeetingPage.prototype.addProject = function () {
    };
    MinuteMeetingPage.prototype.openProjectDetail = function (id, title) {
        this.navCtrl.push(MeetingdetailComponent, { id: id, title: title });
    };
    MinuteMeetingPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-minute-meeting',
            templateUrl: 'minute-meeting.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], MinuteMeetingPage);
    return MinuteMeetingPage;
}());
export { MinuteMeetingPage };
//# sourceMappingURL=minute-meeting.js.map