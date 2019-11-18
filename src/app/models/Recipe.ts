export class Recipe {
  constructor(
    public uri: string,
    public label: string,
    public image: string,
    public source: string,
    public url: string,
    public shareAs: string,
    public ingredientLines: Array<string>,
    public ingredients: Array<Ingredients>,
    public calories: number,
    public totalWeight: number,
    public totalTime: number
  ) {}
}

class Ingredients {
  constructor(public text: string, public weight: number) {}
}
