import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isEditMode = false;

  constructor(private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(e => {
      this.isEditMode = e['id'] != null;
      this.id = +e['id'];
      console.log(this.isEditMode);
    });
  }

}
