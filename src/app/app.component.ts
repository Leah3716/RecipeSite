import { Component } from '@angular/core';
import {RecipeService} from './recipe-service';
import {Recipe} from './Recipe';
import { User } from './User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  currentUser:User = JSON.parse(localStorage.getItem("currentUser") );
  title = 'theProject';
  s:number=3;
  logout()
  {
    localStorage.removeItem("currentUser");
  }
  check():boolean
  {
  if( JSON.parse(localStorage.getItem("currentUser"))!=null )
  return true;
  return false;
  }
}
