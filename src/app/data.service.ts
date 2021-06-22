import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  authtoken = window.localStorage.getItem("authtoken");

  getHomeNews(){
   
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${this.authtoken}`)

  }

  getNewsData(section){
    return this.http.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${this.authtoken}`)
  }
 

}
