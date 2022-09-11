import { Component, OnInit } from '@angular/core';
import{Recipe}from 'src/app/Recipe';
import { Router } from '@angular/router';
import {RecipeService }from '../recipe-service';
import swal from 'sweetalert';
// import * as _swal from 'sweetalert';
// import { SweetAlert } from 'sweetalert/typings/core';

// const swal: SweetAlert = _swal as any;

// swal({
//     title: "Problem",
//     text: "Try again later!",
//     icon: "error"
//   })
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
  // increase(event:any): void {
  //   this.newRecipe.Ingredients.push(event.target.value);
  // }
  change(value,arr,i){
      if(value!="")
      {
       
        arr[i]=value;
       // this.index++;
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
    // this.newRecipe.Name="סתם";
  // this.arrRecipe.push(this.newRecipe);
  this.myRouter.navigate(["reciepe"]);
  this.recSer.AddRecipe(this.newRecipe).subscribe(
    succ=>{swal("Good job!", "המתכון נוסף בהצלחה!", "success");
  },
    err=>{alert("HUGE!")}
  )
    // this.newRecipe.Ingredients.push(event.target.value);
  }
 
  ngOnInit(): void {
 
  }

}
