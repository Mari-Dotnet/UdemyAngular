import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  implements OnInit{
model: any={}
@Input() userFormhomeComponent :any
@Output() cancelRegister= new EventEmitter();

constructor(private accountservice:AccountService) {}
  ngOnInit(): void {
  }
  register(){
    this.accountservice.register(this.model).subscribe({
      next:response=>{
        console.log(response)
      },
      error:error=>console.log(error)
    });
    this.cancel();
    console.log("Register form")
  }
  cancel(){
    console.log("register caneel")
    this.cancelRegister.emit(false);
  }
}
