import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../User';
import { SmallUse } from '../small-use';
import { NgForOf, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  arr:User
  u:User
  isSubscribe:boolean=false;
  log:SmallUse=new SmallUse(null,null);
  arrUser:User[]
  an:SmallUse
  my
  constructor(public userSer: UserService,public myRouter:Router) {
    
   }
  
  add(): void {
  
    this.userSer.logIn(new SmallUse(this.log.Name,this.log.Password)).subscribe(
      mysucc=>{this.an=mysucc; alert("succ");
      localStorage.setItem("currentUser",JSON.stringify(this.an))
      this.myRouter.navigate(["reciepe"])},
      myerr=>{
        this.my=myerr
      if(myerr.status==404)
      {
        alert("this user doesnt exist");
   this.myRouter.navigate(["register",this.log.Name])
  }
  if(myerr.status==409)
  {
    alert("the password is incorrect");
}
      }
    )
   }
   changeMode(): void {
   this.isSubscribe=true;
   }
  ngOnInit(): void {
    this.userSer.Get().subscribe(
      mysucc=>{ this.arrUser=mysucc},
      myerr=>{alert("error get");}
    )
  }

}
