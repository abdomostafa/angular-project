import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  private id: number;

  constructor(private recipesService: RecipeService, private routerActive: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const id = this.routerActive.snapshot.params['id'];
    this.routerActive.params.subscribe(e => {
      this.id = +e['id'];
      this.recipe = this.recipesService.getRecipe(this.id);
    });
  }
  addToShopList() {
    this.recipesService.addToshipingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.routerActive});
    this.router.navigate(['edit'], {relativeTo: this.routerActive});
  }
}
