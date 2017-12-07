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
import { AddAccountComponent } from '../../components/add-account/add-account';
import { AccountDetailComponent } from '../../components/account-detail/account-detail';
var TreasuryPage = /** @class */ (function () {
    function TreasuryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = [{
                id: 1,
                title: "ICLUB",
                balance: 356,
                color: "two"
            }, {
                id: 2,
                title: "Charity",
                balance: 1200,
                color: "four"
            }];
    }
    TreasuryPage.prototype.addAccount = function () {
        this.navCtrl.push(AddAccountComponent);
    };
    TreasuryPage.prototype.openAccountDetail = function (id, title, balance) {
        this.navCtrl.push(AccountDetailComponent, { id: id, title: title, balance: balance });
    };
    TreasuryPage.prototype.addIncome = function () {
    };
    TreasuryPage.prototype.addExpense = function () {
    };
    TreasuryPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-treasury',
            templateUrl: 'treasury.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], TreasuryPage);
    return TreasuryPage;
}());
export { TreasuryPage };
//# sourceMappingURL=treasury.js.map