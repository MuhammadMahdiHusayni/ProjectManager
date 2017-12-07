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
import { ListDetailComponent } from '../../components/list-detail/list-detail';
var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.division = ['Multimedia', 'Kebajikan', 'Komuniti', 'Patriotik'];
        this.items = [];
        this.x = 3;
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Report ' + this.x,
                note: this.division[Math.floor(Math.random() * this.division.length)],
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
            if (i == 4) {
                --this.x;
            }
            if (i == 8) {
                --this.x;
            }
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(ListDetailComponent, { item: item });
    };
    ListPage.prototype.onInput = function (event) {
    };
    ListPage.prototype.onCancel = function (event) {
    };
    ListPage = __decorate([
        Component({
            selector: 'page-list',
            templateUrl: 'list.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ListPage);
    return ListPage;
}());
export { ListPage };
//# sourceMappingURL=list.js.map