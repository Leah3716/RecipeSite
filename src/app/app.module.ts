import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import {HttpClientModule} from '@angular/common/http';
import { LogInComponent } from './log-in/log-in.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { StarPipe } from './star.pipe';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { MinutesHoursPipe } from './minutes-hours.pipe';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RangePipe } from './range.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SmallRecipeComponent,
    AllRecipesComponent,
    LogInComponent,
    RegisterComponent,
    StarPipe,
    RecipeDetailsComponent,
    MinutesHoursPipe,
    AddRecipeComponent,
    RangePipe,  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
