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
  constructor(public recSer:RecipeService) { 
    this.recSer.getCategory().subscribe(
      succ=>{this.categories=succ;},
      err=>{console.log(err);alert("err")}
    )
  }

  ngOnInit(): void {
  }

}
