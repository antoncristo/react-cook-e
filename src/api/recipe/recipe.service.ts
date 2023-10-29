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
		recipesStore.recipes = undefined;

		return axiosClient
			.get(this.routePath, { params })
			.then(res => {
				recipesStore.recipes = res.data as Recipe[];
				return res.data as Recipe[];
			})
			.catch(err => {
				recipesStore.recipes = null;
				errorHandler(err);
				return undefined;
			});
	};

	getRecipe = async (recipeId: string): Promise<Recipe | undefined> =>
		axiosClient
			.get(`${this.routePath}/${recipeId}`)
			.then(res => res.data as Recipe)
			.catch(err => {
				errorHandler(err);
				return undefined;
			});

	postRecipe = async (recipe: Recipe): Promise<Recipe | undefined> =>
		axiosClient
			.post(this.routePath, { recipe })
			.then(res => res.data as Recipe)
			.catch(err => {
				errorHandler(err);
				return undefined;
			});

	putRecipe = async (updatedRecipe: Recipe): Promise<Recipe | undefined> =>
		axiosClient
			.put(this.routePath, { recipe: updatedRecipe })
			.then(res => res.data as Recipe)
			.catch(err => {
				errorHandler(err);
				return undefined;
			});

	deleteRecipe = async (recipeToDelete: Recipe): Promise<void> =>
		axiosClient
			.delete(`${this.routePath}/${recipeToDelete.id}`)
			.then(() => undefined)
			.catch(err => {
				errorHandler(err);
			});
}

export const recipeService = new RecipeService();
