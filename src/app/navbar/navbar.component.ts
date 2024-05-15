import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
 model:any={}

/**
 *
 */
constructor(public accountservice:AccountService) {
}

  ngOnInit(): void {
  }

 
  login(){
  this.accountservice.login(this.model).subscribe({
      next:response=>{
        console.log(response);
      },
      error:(error)=>console.log("error")

    });
  }

  logout(){
    this.accountservice.logout();
    this.model.UserName="";
    this.model.Password="";
  }
}
