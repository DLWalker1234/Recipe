import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe','This is simply a test', 'https://www.seriouseats.com/recipes/images/2016/06/20160623-cuban-roast-pork-mojo-recipe-14-1500x1125.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}