import { Component, OnInit } from '@angular/core';
import { Member } from '../../_models/member';
import { MemberService } from '../../_services/member.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent implements OnInit {
  member:Member= {} as Member;
  /**
   *
   */
  constructor(private memberService:MemberService,private route:ActivatedRoute) {
    
    
  }
  ngOnInit(): void {
    this.loadMember();
  }
  
  loadMember(){
    var username=this.route.snapshot.paramMap.get('UserName');
    console.log("route",username);
    if(!username) return;
    this.memberService.getUserName(username).subscribe({
      next:user=>this.member=user
    })
  }

}
