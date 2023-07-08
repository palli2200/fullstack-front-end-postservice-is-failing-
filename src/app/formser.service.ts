import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormserService {

  constructor(public http:HttpClient) { }
  getData(){
    return this.http.get('http://localhost:3000/getdata')
  }
  postData(bodydata: any){
    var headers = new HttpHeaders({
      'Content-Type':"application/json",
      'Access-Control-Allow-Origin':'*'
    })
    return this.http.post('http://localhost:3000/postdata', bodydata, { headers : headers })
  }
}
