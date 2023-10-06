import { type QueryBasicParams, type Recipe } from '@cooke/types';
import { type AxiosResponse } from 'axios';

export interface RecipeServiceApi {
	getRecipes: (queryParams: QueryBasicParams) => Promise<AxiosResponse<Recipe[]>>;
	postRecipe: (recipe: Recipe) => Promise<AxiosResponse<Recipe>>;
	putRecipe: (recipe: Recipe) => Promise<Recipe>;
	deleteRecipe: (recipeToDelete: Recipe) => Promise<UUID>;
}
