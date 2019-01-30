import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/ShoppingList.service';

@Injectable()
export class RecipeService {
  recipeSelectEmitter = new EventEmitter<Recipe>()
  private recipes = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('xxx', 2), new Ingredient('aa', 2)]),
    new Recipe('B Test Recipe', 'This is simply a test xx', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Burger_King_%40Taiwan_Double_Fish_Burger.jpg/1280px-Burger_King_%40Taiwan_Double_Fish_Burger.jpg',
      [new Ingredient('bbb', 2), new Ingredient('ddddd', 2)])
  ];

  constructor(private shoppingService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addToshipingList(ingredients: Ingredient[]) {
   this.shoppingService.addIngredients(ingredients);
  }
}
