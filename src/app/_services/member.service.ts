import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from '../_models/member';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  baseurl =environment.baseURL;
  members:Member[]=[];
  constructor(private http:HttpClient) {

   }

   getMembers(){
    if(this.members.length>0) return of(this.members)
   return this.http.get<Member[]>(this.baseurl+"Users").pipe(
    map(members=>{
      this.members=members
      return members
    })
  )
   //return this.http.get<Member[]>(this.baseurl+"Users",this.getHttpOptions());
   }

   getUserName(UserName:string){
    const member=this.members.find(x=>x.userName === UserName)
    if(member){
      return of(member)
    }
    return this.http.get<Member>(this.baseurl+ "Users/GetUser/"+UserName)
    //return this.http.get<Member>(this.baseurl+ "users/"+UserName,this.getHttpOptions())
   }

   updateMember(member:Member){
    return this.http.put(this.baseurl+ "Users/UpdateUser",member).pipe(
      map(()=>{
        const index=this.members.indexOf(member);
        this.members[index]={...this.members[index],...member};
      })
    )
   }
   getHttpOptions(){
    const userToken=localStorage.getItem('user')
    if(!userToken) return
    const user=JSON.parse(userToken)
    return {
      headers:new HttpHeaders({
        Authorization: 'Bearer '+user.token
      })
    }
    }
}
