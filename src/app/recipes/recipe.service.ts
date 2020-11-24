import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'Test Recipe',
			'Very Tastey',
			'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
			[ new Ingredient('Recipe Item', 1), new Ingredient('Recipe Item 2', 2) ]
		),
		new Recipe('Tecipe', 'Very Tastey', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
			new Ingredient('Recipe Item 3', 10),
			new Ingredient('Recipe Item 4', 2)
		]),
		new Recipe('Blecipe', 'Very Tastey', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
			new Ingredient('Recipe Item 5', 1),
			new Ingredient('Recipe Item 6', 2)
		])
	];
	constructor(private slService: ShoppingListService) {}

	getRecipes() {
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}
