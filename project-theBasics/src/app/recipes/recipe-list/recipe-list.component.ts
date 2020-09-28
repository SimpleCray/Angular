import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() sendDetailToParent = new EventEmitter<Recipe>()
  //declare that this is an array of recipe object (recipe.model.ts)
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'Just a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563'),
    new Recipe('A Test Recipe 2', 'Just a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563'),
    new Recipe('A Test Recipe 3', 'Just a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563'),
    new Recipe('A Test Recipe 4', 'Just a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563'),
  ] 
  constructor() { }

  ngOnInit(): void {
  }

  displayDetail(recipe){
    this.sendDetailToParent.emit(recipe)
  }
}
