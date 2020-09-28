import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addNewItemToList = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(name, amount){
    this.addNewItemToList.emit({name, amount})
  }
}
