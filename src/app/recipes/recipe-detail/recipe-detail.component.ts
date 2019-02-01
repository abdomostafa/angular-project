import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipesService: RecipeService, private routerActive: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.routerActive.snapshot.params['id'];
  }
  addToShopList() {
    this.recipesService.addToshipingList(this.recipe.ingredients);
  }
}
