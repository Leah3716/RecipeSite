import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{User} from './User';
import { SmallUse } from './small-use';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="https://localhost:44312/api/User";
  register( use:User)
  {
return this.http.post<User>("https://localhost:44312/api/User/register",use);
  }
 logIn (use:SmallUse)
  {
return this.http.post<User>("https://localhost:44312/api/User/logIn",use);
  }
  //TO DELETE
  Get ()
  {
return this.http.get<User[]>("https://localhost:44312/api/User/Get");
  }

  constructor(public http:HttpClient) { }
}
