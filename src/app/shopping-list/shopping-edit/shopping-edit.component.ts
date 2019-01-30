import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../ShoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('elementName') name: ElementRef;
  @ViewChild('elementValue') value: ElementRef;

  constructor(private shoppingService: ShoppingListService) {
  }

  ngOnInit() {
  }

  OnAdd() {
    this.shoppingService.addIngredient(new Ingredient(this.name.nativeElement.value, this.value.nativeElement.value));
  }
}
