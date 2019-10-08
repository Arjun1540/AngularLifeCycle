import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { UserResponce } from '../servieces/UserResponce';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _httpclient : HttpClient) { }
  UserDetail:Array<UserResponce>=new Array<UserResponce>();
  ngOnInit() {
    // this._httpclient.get<UserResponce>("https://api.github.com/users").subscribe(data=>{
    // this.UserDetail=data;
    // console.log(this.UserDetail);
    // }),
    // err=>{console.log(err);}
    this._httpclient.post("https://jsonplaceholder.typicode.com/posts",{
      title:"developer",
      body:"new joinee",
      userid:5000
    }).subscribe(res=>{console.log(res)}, err=>{console.log(err)})
}

}
