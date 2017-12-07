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
import { ProjectService } from '../../app/services/project.service';
var AddingprojectComponent = /** @class */ (function () {
    // TODO ADD VALIDATION
    // ID WILL BECOME GUID AND COLOUR WILL RANDOMIZE IN BACKEND
    function AddingprojectComponent(projectService) {
        this.projectService = projectService;
        this.projects = [];
    }
    // ADD IF SUCCESS GO BACK WITH TOASTER SUCCESS
    AddingprojectComponent.prototype.sendForm = function () {
        this.projectService.addProject(this.projects);
    };
    AddingprojectComponent = __decorate([
        Component({
            selector: 'addingproject',
            templateUrl: 'addingproject.html'
        }),
        __metadata("design:paramtypes", [ProjectService])
    ], AddingprojectComponent);
    return AddingprojectComponent;
}());
export { AddingprojectComponent };
//# sourceMappingURL=addingproject.js.map