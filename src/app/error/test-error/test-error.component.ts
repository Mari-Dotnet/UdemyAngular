import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.css'
})
export class TestErrorComponent {
  baseurl='https://localhost:7051/api/';
 constructor(private http:HttpClient) {}

 get404error(){
  this.http.get(this.baseurl+"Buggy/not-found").subscribe({
    next:response=> console.log(response),
    error:error=> console.log(error)
  })
 }

 get400error(){
  this.http.get(this.baseurl+"Buggy/bad-request").subscribe({
    next:response=> console.log(response),
    error:error=> console.log(error)
  })
 }

 get500error(){
  this.http.get(this.baseurl+"Buggy/server-error").subscribe({
    next:response=> console.log(response),
    error:error=> console.log(error)
  })
 }

 get401error(){
  this.http.get(this.baseurl+"Buggy/auth").subscribe({
    next:response=> console.log(response),
    error:error=> console.log(error)
  })
 }


}
