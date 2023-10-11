import { type QueryBasicParams, type Recipe } from '@cooke/types';
import { type AxiosResponse } from 'axios';

export interface RecipeServiceApi {
	routePath: string;
	getRecipes: (queryParams: QueryBasicParams) => Promise<AxiosResponse<Recipe[]>>;
	postRecipe: (recipe: Recipe) => Promise<AxiosResponse<Recipe>>;
	putRecipe: (updatedRecipe: Recipe) => Promise<AxiosResponse<Recipe>>;
	deleteRecipe: (recipeToDelete: Recipe) => Promise<AxiosResponse<UUID>>;
}
