import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['./rest-list.component.css']
})
export class RestListComponent implements OnInit{

  data:string="Hi welcome to Restaurant"
  placeholderData:string="Enter Restaurant Name... "
  restName:string=""
  restList:any=[]
  


  constructor(private ds:DataService){}

  ngOnInit(): void {
    this.ds.getRestaurants().subscribe((data:any)=>{
      // console.log(data.restaurants);
      this.restList=data.restaurants
      console.log(this.restList);
      
      
    })
  }

  // methods 

  method1(){
    alert(this.restName)
    // alert(sData.value)
  }

  // method2(event:any){
    // console.log(event.target.value);
    // this.restName=event.target.value
    
  // }
}
