import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();

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
	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}
	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}
