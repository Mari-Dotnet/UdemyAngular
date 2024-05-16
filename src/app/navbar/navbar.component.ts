import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
constructor(public accountservice:AccountService,
            private route:Router,
            private toastr: ToastrService
           ) {}

  ngOnInit(): void {
  }

 
  login(){
  this.accountservice.login(this.model).subscribe({
      next:response=>{
        console.log(response);
        this.route.navigateByUrl("/members")
      },
      error:(error)=> this.toastr.error(error.error)

    });
  }

  logout(){
    this.accountservice.logout();
    this.model.UserName="";
    this.model.Password="";
    this.route.navigateByUrl("/")
  }
}
