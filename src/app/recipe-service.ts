import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Recipe} from './Recipe';
import { Category } from './Category';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
getRecipe()
{
  return this.http.get<Recipe[]>("https://localhost:44312/api/Recipe/Get");
}
getCategory()
{
  return this.http.get<Category[]>("https://localhost:44312/api/Recipe/getCategory");
}
AddRecipe(r:Recipe)
{
  return this.http.post<void>("https://localhost:44312/api/Recipe/AddRecipe",r);
}
Delete(r:string)
{
  return this.http.delete<void>("https://localhost:44312/api/Recipe/Delete?id="+r);
}
  constructor(public http:HttpClient) { }
}
