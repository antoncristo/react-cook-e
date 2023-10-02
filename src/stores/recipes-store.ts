import { makeAutoObservable } from 'mobx';
import { type Recipe } from '@cooke/types';

class RecipesStore {
	private _recipes: Recipe[] | null | undefined = undefined;

	constructor() {
		makeAutoObservable(this);
	}

	get recipes() {
		return this._recipes;
	}

	set recipes(recipes: Recipe[] | null | undefined) {
		this._recipes = recipes;
	}

	get isError() {
		return this._recipes === null;
	}

	get isLoading() {
		return this._recipes === undefined;
	}

	getRecipe(recipeID: UUID): Recipe | null | undefined {
		return this._recipes?.find(r => r.id === recipeID);
	}
}

export const recipesStore = new RecipesStore();
