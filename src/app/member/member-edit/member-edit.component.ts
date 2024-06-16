import { Component, HostListener, OnInit, ViewChild, viewChild } from '@angular/core';
import { Member } from '../../_models/member';
import { User } from '../../_models/user';
import { AccountService } from '../../_services/account.service';
import { MemberService } from '../../_services/member.service';
import { take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit{
member:Member| undefined;
user: User | null = null  ;
@ViewChild('editForm') editForm:NgForm | undefined;
@HostListener('window:beforeunload',['$event']) unloadNotification($event:any){
  if(this.editForm?.dirty){
$event.returnValue=true;
  }
}
 
  constructor(private accounrService:AccountService, private memberService:MemberService,
    private toster:ToastrService
  ) {
    this.accounrService.currentUser$.pipe(take(1)).subscribe({
      next:user=>this.user=user
    })
  }
  ngOnInit(): void {
    this.loadmember();
  }

  loadmember(){
    if(!this.user) return;
    this.memberService.getUserName(this.user.userName).subscribe({
      next:member=> this.member= member
    })

  }

  updateMeber(){
    this.memberService.updateMember(this.editForm?.value).subscribe({
      next:_=>{
        this.toster.success("Profile updated sucessfully")
        this.editForm?.reset(this.member);
      }
    });
  }
}
