import { Component, OnInit } from '@angular/core';
import{Recipe}from 'src/app/Recipe';
import { ActivatedRoute } from '@angular/router';
import {  Input } from '@angular/core';
import {Category} from '../Category';
import { RecipeService } from '../recipe-service';
@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.css']
})
export class SmallRecipeComponent implements OnInit {
  categories:Category[]
  @Input() r:Recipe;
  
  // =new Recipe("","","",null,null,null,[],[],"","");
  // r:Recipe=new Recipe("012","icecream","0",40,2,new Date(),["floor","sugar"],["mix","bake"],"123456789","");
  // r2:Recipe=new Recipe("012","cake","0",40,2,new Date(),["floor","sugar"],["mix","bake"],"123456789","");
  constructor(public recSer:RecipeService) { 
    this.recSer.getCategory().subscribe(
      succ=>{this.categories=succ;},
      err=>{console.log(err);alert("err")}
    )
  }

  ngOnInit(): void {
    // this.id=this.route.snapshot.paramMap.get('id')
  }

}
