import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
URL= "http://localhost:3000/list"

  constructor(private _http:HttpClient) { }
  getRestoList(){
    return this._http.get(this.URL)
  }

  addResto(data: any){
    return this._http.post(this.URL, data);
  }

  // deleteCurrentData(id: any){
  //   return this._http.delete(`${this.URL}/${id}`)
  // }

  getCurrentData(id: number){
    return this._http.get(`${this.URL}/${id}`)
  }
}
