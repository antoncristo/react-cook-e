import { type Recipe } from '@cooke/types';

export interface RecipeServiceApi {
	getRecipes: () => Promise<Recipe[]>;
	getRecipe: (recipeID: UUID) => Promise<Recipe | null>;
	postRecipe: (recipe: Recipe) => Promise<Recipe>;
	putRecipe: (recipe: Recipe) => Promise<Recipe>;
}
