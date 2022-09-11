import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

const routes: Routes = [
 
   {path:'register',component:RegisterComponent},
   {path:'register/:name',component:RegisterComponent},
 {path:'logIn',component:LogInComponent},
 {path:'reciepe',component:AllRecipesComponent},
 {path:'reciepe/:name',component:AllRecipesComponent},
 {path:'details',component:RecipeDetailsComponent},
 {path:'details/:id',component:RecipeDetailsComponent},
 {path:'add',component:AddRecipeComponent},
    {path:'',redirectTo:'logIn',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
