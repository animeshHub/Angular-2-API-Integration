import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { NgxXml2jsonService } from 'ngx-xml2json';

import {RootObject} from './proj-model';
import {RootBlog} from './blog-model';


@Injectable({
  providedIn: 'root'
})
export class PorjserviceService {
  _url:string = 'http://ergast.com/api/f1/2004/1/results.json';
  _xml:string = '../../assets/json/blogdata.json';



   public detailsAnimesh=[]; 

  constructor(private http:HttpClient, private ngxXml2jsonService: NgxXml2jsonService) { }


      

getBlogdata(){
   return this.http.get<RootBlog>(this._xml);
}



  getData(){
  	return this.http.get<RootObject>(this._url);
    console.log('adaaaaa')
  }

  sendDatadetails(){
  	 return this.detailsAnimesh;
  }

}
