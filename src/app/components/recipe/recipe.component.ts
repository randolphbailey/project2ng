import { Component, OnInit } from "@angular/core";
import { RecipeService } from "src/app/services/recipe/recipe.service";
import { Recipe } from "../../models/Recipe";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.css"]
})
export class RecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  recipeQuery: string;

  constructor(private rs: RecipeService) {}

  ngOnInit() {}

  getRecipes() {
    this.rs.getRecipes(this.recipeQuery).subscribe(
      data => {
        this.recipes = [];
        data.hits.forEach(element => {
          this.recipes.push(element.recipe);
        });
        console.log(this.recipes);
      },
      error => console.log(error)
    );
  }
}
