import { Component, OnInit } from '@angular/core';
import{Recipe}from 'src/app/Recipe';
import {RecipeService }from '../recipe-service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
arr:Recipe[]
start:number;
end:number;
nameRec:string=null;
clicked:boolean=false;
categories = [
  {id: "-1", name: "לכל המתכונים"},
  {id: "0", name: "לחמים ומאפים"},
  {id: "1", name: "קינוחים"},
  {id: "2", name: "מנות עיקריות"},
  {id: "3", name: "מרקים"},
  // {id: 5, name: "England"}
];
selectedValue = null;
  constructor(public recSer:RecipeService,public myRouter:Router) {
  
    this.recSer.getRecipe().subscribe(
      succ=>{
        this.arr=succ;
      },
      err=>{console.log(err);})

  }
  onSelectedChange(event:any):void
  {
    this.selectedValue=event.target.value;
  }
  details(id:string):void
  {
    this.myRouter.navigate(["details",id])
  }
  add():void
  {
    this.myRouter.navigate(["add"])
  }
  a():void
  {
    alert(this.nameRec);
  if(this.nameRec!="")
       { this.arr= this.arr.filter(v => v.Name.includes(this.nameRec));
        if(this.selectedValue!=null)
        this.arr= this.arr.filter(v => v.CategoryId==this.selectedValue)
   }
   else
     { this.recSer.getRecipe().subscribe(
        succ=>{
          this.arr=succ;
        },
        err=>{console.log(err);})
  
    }
      
  }
//   filter(rr){
//     //     if(rr!="קטגוריה")
//     //     this.catId=rr;
//     //     else
//     //     this.catId=null;
//         //alert(this.catId)
//         this.recSer.getRecipe().subscribe(succ=>{ this.arr=succ;
//           if(this.end!=null)
//           {
//             this.recSer.TimeRecipe(this.time).subscribe(succ=&gt;{
//     this.arr=succ;
//               if(this.nameRec!="")
//               {  this.arr= this.arr.filter(item =&gt;
//     item.Name.includes(this.name1)) }
//                 if(this.catId!=null)
//                 {
//                  this.arr= this.arr.filter(item =&gt;
//     item.CategoryId==this.catId)
//                 }
//            
//             })
//              }
//              if(this.time==null)
//              {
//               if(this.name1!=&quot;&quot;)
//               {  this.arr= this.arr.filter(item =&gt;
//     item.Name.includes(this.name1)) }
//                 if(this.catId!=null)
//                 {
//                  this.arr= this.arr.filter(item =&gt;
//     item.CategoryId==this.catId)
//                 }
//              }
//          
//      
//          
//        
//        
//         } ,err=&gt;{ console.log(&quot;error&quot;)  })
    
//      
//       }
 
// //   check():void{
// //     if(this.clicked== false){

// //       this. callThatFunction();
// //     }

// // }מע
//   timeFilter():void{
//     alert("succ!");
//   }
  
  ngOnInit(): void {
  }

}
