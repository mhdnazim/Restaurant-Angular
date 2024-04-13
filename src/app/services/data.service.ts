import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  serviceData:number=1000

  serviceMethode(){
    alert("service method worked")
  }

  // api call 
  // access all restaurnt datas
  
  getRestaurants(){
    return this.http.get('/assets/restaurants.json')
    // return allows us to use the output inside any function 
  }

}
