import { type AxiosResponse } from 'axios';
import { type Recipe } from '@cooke/types';
import { type QueryBasicParams } from '@cooke/types';
import { axiosClient } from '@cooke/api/axios';

import { type RecipeServiceApi } from './recipe.interface';
import { errorHandler } from '@cooke/utils';
import { recipesStore } from '@cooke/stores/recipes-store';

class RecipeService implements RecipeServiceApi {
	routePath: string = '/recipes';

	getRecipes = async (queryParams?: QueryBasicParams): Promise<Recipe[] | undefined> => {
		const params: QueryBasicParams = {
			search: queryParams?.search ? queryParams?.search : undefined
		};

		return axiosClient
			.get(this.routePath, { params })
			.then(res => res.data as Recipe[])
			.catch(err => {
				recipesStore.recipes = null;
				errorHandler(err);
				return undefined;
			});
	};

	getRecipe = async (recipeId: string): Promise<Recipe> =>
		axiosClient.get(`${this.routePath}/${recipeId}`).then(res => res.data as Recipe);

	postRecipe = async (recipe: Recipe): Promise<AxiosResponse<Recipe>> =>
		axiosClient.post(this.routePath, { recipe });

	putRecipe = async (updatedRecipe: Recipe): Promise<AxiosResponse<Recipe>> =>
		axiosClient.put(this.routePath, { recipe: updatedRecipe });

	deleteRecipe = async (recipeToDelete: Recipe): Promise<AxiosResponse<UUID>> =>
		axiosClient.delete(`${this.routePath}/${recipeToDelete.id}`);
}

export const recipeService = new RecipeService();
