import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { HomePage } from '../../pages/home/home';
import 'rxjs/Rx';

@Injectable()
export class AddprojectService{
    constructor(http:Http){
    }

    //call to save new project
    saveProject(title:string, description:string){

    }

}