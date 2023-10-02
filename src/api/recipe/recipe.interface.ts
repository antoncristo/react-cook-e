import { type QueryBasicParams, type Recipe } from '@cooke/types';

export interface RecipeServiceApi {
	getRecipes: (queryParams: QueryBasicParams) => Promise<Recipe[]>;
	getRecipe: (recipeID: UUID) => Promise<Recipe | null>;
	postRecipe: (recipe: Recipe) => Promise<Recipe>;
	putRecipe: (recipe: Recipe) => Promise<Recipe>;
	deleteRecipe: (recipeToDelete: Recipe) => Promise<UUID>;
}
