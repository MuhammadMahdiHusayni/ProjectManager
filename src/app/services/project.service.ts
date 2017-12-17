import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjectService {
    // URL to web api
    private projectUrl = 'http://reportbackend.azurewebsites.net';  

    constructor(private httpClient: HttpClient, private http: HTTP){
    }

    // TODO DECIDE GONNA USE IONIC NATIVE HTTP OR NOT

    getProject(user:any){
      return new Promise(resolve => {
        this.httpClient.get(`${this.projectUrl}/api/Project/${user.email}`)
        .subscribe(res => resolve(res));
      });
    }

    addProject(project:any){
      return new Promise(resolve => {
        this.httpClient.post(this.projectUrl, project, httpOptions)
        .subscribe(res => resolve(res));
      });
    }

    getReport(id:any){
      return new Promise(resolve => {
        this.httpClient.get(`${this.projectUrl}/api/Report/${id}`)
        .subscribe(res => resolve(res));
      });
    }
 

    //call to save new project
    saveNextPlan(plan:any){
      return new Promise(resolve => {
        this.httpClient.post(this.projectUrl, plan, httpOptions)
        .subscribe(res => resolve(res));
      });
    }

}