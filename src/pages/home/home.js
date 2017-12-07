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
import { AddingprojectComponent } from '../../components/addingproject/addingproject';
import { ProjectdetailComponent } from '../../components/projectdetail/projectdetail';
import { ProjectService } from '../../app/services/project.service';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, projectService) {
        this.navCtrl = navCtrl;
        this.projectService = projectService;
        this.projects = [];
    }
    HomePage.prototype.ngOnInit = function () {
        this.getProject();
    };
    HomePage.prototype.getProject = function () {
        this.projectService.getProject(this.successHandler, this.errorHandler);
        // this.projectService.getProject(this.projects);
    };
    HomePage.prototype.successHandler = function (res) {
        this.projects = res;
    };
    HomePage.prototype.errorHandler = function (err) {
        console.log(err);
    };
    HomePage.prototype.addProject = function () {
        this.navCtrl.push(AddingprojectComponent);
    };
    HomePage.prototype.openProjectDetail = function (item) {
        this.navCtrl.push(ProjectdetailComponent, { item: item });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController,
            ProjectService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map