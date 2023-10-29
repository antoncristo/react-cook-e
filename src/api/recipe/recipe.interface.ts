import { type QueryBasicParams, type Recipe } from '@cooke/types';

export interface RecipeServiceApi {
	routePath: string;
	getRecipes: (queryParams: QueryBasicParams) => Promise<Recipe[] | undefined>;
	getRecipe: (recipeId: string) => Promise<Recipe | undefined>;
	postRecipe: (recipe: Recipe) => Promise<Recipe | undefined>;
	putRecipe: (updatedRecipe: Recipe) => Promise<Recipe | undefined>;
	deleteRecipe: (recipeToDelete: Recipe) => Promise<void>;
}
