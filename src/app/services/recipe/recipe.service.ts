import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "src/app/models/Recipe";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getRecipes(query: string) {
    return this.http.get<RawData>(
      "https://api.edamam.com/search?app_id=ff255a59&app_key=5e5f6283b26f644b3ca5d00d7e14a4af&q=" +
        query +
        "&from=0&to=5"
    );
  }
}

/*
 * Below code is to get Angular to stop yelling at me for calling
 * a perfectly valid field on the returned data.
 */

class HitsData {
  public recipe: Recipe;
  public bookmarked: boolean;
  public bought: boolean;
}

class RawData {
  public hits: HitsData[];
}
