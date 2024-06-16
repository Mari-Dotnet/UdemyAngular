import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
registermode=false;
Users:any

constructor(private http: HttpClient) {}
  ngOnInit(): void {
    //this.getUser();
  }

getUser(){
  this.http.get("https://localhost:7051/api/Users").subscribe({
    next:(response)=>{
      this.Users=response;
      console.log("User list",this.Users)
    },
    error:(error)=>{console.log("Error user get Api " + JSON.stringify(error))},
    complete:()=>{
      console.log("user details get from  Api completed")
    }
   })

   }
   registertoogle(){
    console.log("hello");
    this.registermode=!this.registermode
  }

  cancelRegisterMethod(event:boolean){
this.registermode=event;
  }
}



