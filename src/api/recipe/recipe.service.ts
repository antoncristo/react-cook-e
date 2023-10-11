import { type AxiosResponse } from 'axios';
import { type Recipe } from '@cooke/types';
import { type QueryBasicParams } from '@cooke/types';

import { type RecipeServiceApi } from './recipe.interface';

import { axiosClient } from '../axios';

class RecipeService implements RecipeServiceApi {
	routePath: string = '/recipes';

	getRecipes = async (
		queryParams?: QueryBasicParams
	): Promise<AxiosResponse<Recipe[]>> => {
		const params: QueryBasicParams = {
			search: queryParams?.search ? queryParams?.search : undefined
		};

		return axiosClient.get(this.routePath, { params });
	};

	postRecipe = async (recipe: Recipe): Promise<AxiosResponse<Recipe>> =>
		axiosClient.post(this.routePath, { recipe });

	putRecipe = async (updatedRecipe: Recipe): Promise<AxiosResponse<Recipe>> =>
		axiosClient.put(this.routePath, { recipe: updatedRecipe });

	deleteRecipe = async (recipeToDelete: Recipe): Promise<AxiosResponse<UUID>> =>
		axiosClient.delete(`${this.routePath}/${recipeToDelete.id}`);
}

export const recipeService = new RecipeService();
