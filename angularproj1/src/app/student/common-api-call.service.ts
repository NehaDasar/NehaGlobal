
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {
  // adminUrl = "http://localhost:3000/comments";
  // stdentNameUrl ="http://localhost:3000/studentname";
  url ="http://localhost:3000/";

  constructor(private httpClient : HttpClient) { }

  // postApiCall(formData:any){
  //   return this.httpClient.post(this.adminUrl,formData)

  // }
  // postApiForStudentName(data:any)
  // {
  //     return this.httpClient.post(this.studentNameUrl,data);
  // }
  postApiCall(endpoint: string,  data:any){
    let apiurl = this.url +endpoint;
    return this.httpClient.post(apiurl,data)
  
    }
    getApiCall(enpoint:any){
      let url = this.url + enpoint;
      return this.httpClient.get(url);
    }
    
}
