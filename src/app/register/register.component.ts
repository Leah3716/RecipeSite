import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
use:User=new User(null,null,null,null,null);
  constructor(public userSer: UserService,public myRouter:Router,public ActiveR:ActivatedRoute) {
    this.ActiveR.params.subscribe(
      para=>{
        this.use.Name=para["name"];
      }
    )
   }
  addItem():void{
    this.userSer.register(this.use).subscribe(
      mysucc=>{alert("succ");this.use=mysucc;
      localStorage.setItem("currentUser",JSON.stringify(this.use))
      this.myRouter.navigate(["reciepe"]) },
      myerr=>{alert("error");console.log("error register");},
    )
  }
  ngOnInit(): void {
  }
}

