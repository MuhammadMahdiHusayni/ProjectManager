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
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
var MeetingdetailComponent = /** @class */ (function () {
    function MeetingdetailComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.diseases = [
            { title: "Attendance", color: "four", items: [{ name: "Afiq" }, { name: "Mat" }, { name: "Arif" }] },
            { title: "Agenda Items", color: "five", items: [{ name: "Agenda 1" }, { name: "Agenda 12" }, { name: "Agenda 14" }] },
            { title: "Action Items", color: "one", items: [{ name: "Action 1" }, { name: "Action 12" }, { name: "Action 13" }] },
            { title: "Other Notes", color: "three", items: [{ name: "This is other note" }] }
        ];
        this.shownGroup = null;
        this.id = navParams.get('id');
        this.title = navParams.get('title');
        this.toggleDetail = true;
    }
    MeetingdetailComponent.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    MeetingdetailComponent.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    MeetingdetailComponent = __decorate([
        Component({
            selector: 'meetingdetail',
            templateUrl: 'meetingdetail.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], MeetingdetailComponent);
    return MeetingdetailComponent;
}());
export { MeetingdetailComponent };
//# sourceMappingURL=meetingdetail.js.map