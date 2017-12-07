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
var AccountDetailComponent = /** @class */ (function () {
    function AccountDetailComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            {
                type: 1,
                description: "Afiq pay July fees",
                amount: 15
            },
            {
                type: 1,
                description: "Mahdi pay July fees",
                amount: 15
            },
            {
                type: 2,
                description: "Pay electric bill",
                amount: 75
            },
            {
                type: 2,
                description: "Pay Ustaz",
                amount: 200
            },
            {
                type: 1,
                description: "Donation",
                amount: 300
            },
            {
                type: 1,
                description: "Mat pay July fees",
                amount: 15
            },
        ];
        this.id = navParams.get('id');
        this.title = navParams.get('title');
        this.balance = navParams.get('balance');
    }
    AccountDetailComponent = __decorate([
        Component({
            selector: 'account-detail',
            templateUrl: 'account-detail.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], AccountDetailComponent);
    return AccountDetailComponent;
}());
export { AccountDetailComponent };
//# sourceMappingURL=account-detail.js.map