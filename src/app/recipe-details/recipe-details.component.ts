import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { RecipeService } from '../recipe-service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../User';
import { Category } from '../Category';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  arr: Recipe[]
  categories: Category[]
  id: string = "0"
  index: number = 0
  currentUser: User = JSON.parse(localStorage.getItem("currentUser"));
  constructor(public recSer: RecipeService, public ActiveR: ActivatedRoute, public myRouter: Router) {
    this.ActiveR.params.subscribe(
      para => {
        this.id = para["id"];
      }
    )
    this.recSer.getRecipe().subscribe(
      succ => { this.arr = succ; },
      err => { console.log(err); alert("err") }
    )
    this.recSer.getCategory().subscribe(
      succ => { this.categories = succ; },
      err => { console.log(err); alert("err") }
    )
  }

  delete(r: Recipe): void {
    this.recSer.Delete(r.Id).subscribe(
      succ => { alert("GOOD") },
      err => { alert("ERR") }
    )
    this.myRouter.navigate(["reciepe"])
  }

  ngOnInit(): void {
  }
}
