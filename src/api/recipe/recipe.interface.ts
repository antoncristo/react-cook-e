import { type QueryBasicParams, type Recipe } from '@cooke/types';
import { type AxiosResponse } from 'axios';

export interface RecipeServiceApi {
	routePath: string;
	getRecipes: (queryParams: QueryBasicParams) => Promise<Recipe[] | undefined>;
	getRecipe: (recipeId: string) => Promise<Recipe>;
	postRecipe: (recipe: Recipe) => Promise<Recipe | undefined>;
	putRecipe: (updatedRecipe: Recipe) => Promise<Recipe | undefined>;
	deleteRecipe: (recipeToDelete: Recipe) => Promise<AxiosResponse<UUID>>;
}
