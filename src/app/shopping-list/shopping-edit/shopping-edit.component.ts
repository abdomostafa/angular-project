import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('elementName') name: ElementRef;
  @ViewChild('elementValue') value: ElementRef;
  @Output() itemAdd = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  OnAdd() {
    this.itemAdd.emit(new Ingredient(this.name.nativeElement.value, this.name.nativeElement.value));
  }
}
