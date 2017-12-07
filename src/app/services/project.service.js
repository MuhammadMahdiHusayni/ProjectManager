var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var ProjectService = /** @class */ (function () {
    function ProjectService(httpClient, http) {
        this.httpClient = httpClient;
        this.http = http;
        this.projectUrl = 'https://jsonplaceholder.typicode.com/posts'; // URL to web api
    }
    ProjectService.prototype.getProject = function (successHandler, errorHandler) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.projectUrl)
                .toPromise()
                .then(successHandler, errorHandler);
        });
        return promise;
    };
    // project:Project[] = [];
    // getProject(projects): Promise<{}>{
    //     let promise = new Promise((resolve, reject) => {
    //       this.httpClient.get(this.projectUrl)
    //           .toPromise()
    //           .then(res => { projects = res; this.project = res;
    //           }, msg => {
    //           });
    //     });
    //     return promise;
    //   }
    ProjectService.prototype.addProject = function (project) {
        var body = JSON.stringify(project);
        return this.httpClient
            .post(this.projectUrl, body, httpOptions)
            .toPromise()
            .then(function (res) {
            console.log('here', res);
            return res;
        })
            .catch(function (err) {
            console.log('error', err);
            return err;
        });
    };
    // addProject(project: Project[]){
    //   console.log('project', project);
    //     this.http.post(`${this.projectUrl}/Create`, { project }, {})
    //     .then(data => {
    //       console.log('ok');
    //     })
    //     .catch(error => {
    //       console.log('not ok');
    //     });
    // }
    // cordova.plugin.http.get('https://google.com/', 
    //   { id: 12, message: 'test' }, 
    //   { Authorization: 'OAuth2: token' }, 
    //   function(response) {
    //     console.log(response.status);
    //   }, function(response) {
    //     console.error(response.error);
    //   });
    // getProject(){
    //   this.http.get('https://jsonplaceholder.typicode.com/posts', {}, {})
    //     .then(data => {
    //       console.log('ok');
    //     })
    //     .catch(error => {
    //       console.log('not ok');
    //     });
    // }
    //call to save new project
    ProjectService.prototype.saveProject = function (title, description) {
    };
    // cordova.plugin.http.post('https://google.com/', {
    //   id: 12,
    //   message: 'test'
    // }, { Authorization: 'OAuth2: token' }, function(response) {
    //   // prints 200
    //   console.log(response.status);
    //   try {
    //     response.data = JSON.parse(response.data);
    //     // prints test
    //     console.log(response.data.message);
    //   } catch(e) {
    //     console.error('JSON parsing error');
    //   }
    // }, function(response) {
    //   // prints 403
    //   console.log(response.status);
    //   //prints Permission denied
    //   console.log(response.error);
    // });
    // addProject(project: Project[]){
    //   console.log('project', project);
    //     this.http.post(`${this.projectUrl}/Create`, { project }, {})
    //     .then(data => {
    //       console.log('ok');
    //     })
    //     .catch(error => {
    //       console.log('not ok');
    //     });
    // }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ProjectService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    ProjectService.prototype.log = function (message) {
        console.log(message);
    };
    ProjectService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, HTTP])
    ], ProjectService);
    return ProjectService;
}());
export { ProjectService };
//# sourceMappingURL=project.service.js.map