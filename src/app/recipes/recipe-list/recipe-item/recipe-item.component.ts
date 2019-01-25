import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() rec: Recipe;

  constructor(private recipesService: RecipeService) {
  }

  ngOnInit() {
  }

  showRecipe() {
    this.recipesService.recipeSelectEmitter.emit(this.rec);
  }
}
