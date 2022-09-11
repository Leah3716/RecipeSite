import { Component, OnInit } from '@angular/core';
import{Recipe}from 'src/app/Recipe';
import { Router } from '@angular/router';
import {RecipeService }from '../recipe-service';
import swal from 'sweetalert';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  arr:number[];
arrRecipe:Recipe[];
newRecipe:Recipe=new Recipe(null,null,null,null,null,new Date(),[""],[""], JSON.parse(localStorage.getItem("currentUser")).Id,null);
  constructor(public recSer:RecipeService,public myRouter:Router) {
    this.recSer.getRecipe().subscribe(
      succ=>{this.arrRecipe=succ;},
      err=>{console.log(err);})
      
   }
  change(value,arr,i){
      if(value!="")
      {
       
        arr[i]=value;
        arr[i+1]="";
        arr.splice(i+1,1)   
      }
      else{
        arr.splice(i-1,1)
      }
    if(arr.length==0)
    arr[0]="";
  }
  add(): void {
  
    this.newRecipe.Id= this.arrRecipe.length.toString();
    this.newRecipe.ImgRouting="assets/img/red.jpg";
    this.newRecipe.CategoryId="1";
  this.myRouter.navigate(["reciepe"]);
  this.recSer.AddRecipe(this.newRecipe).subscribe(
    succ=>{swal("Good job!", "המתכון נוסף בהצלחה!", "success");
  },
    err=>{alert("HUGE!")}
  )
  }
 
  ngOnInit(): void {
 
  }

}
