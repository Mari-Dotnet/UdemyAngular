import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private http:HttpClient ) {

  }
  ngOnInit(): void {
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
  title:string = 'Dating APP';
  Users:any;
}

