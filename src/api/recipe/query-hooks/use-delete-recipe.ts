import { type Recipe } from '@cooke/types';
import { useMutation } from 'react-query';
import { recipeService } from '../recipe.service';
import { queryClient } from '@cooke/api/query-client';
import { GET_RECIPES_QUERY_KEY } from './use-get-recipes';

export const DELETE_RECIPE_QUERY_KEY = 'delete_recipe_key';

export const useDeleteRecipe = () => {
	const { mutate, isError } = useMutation(
		[DELETE_RECIPE_QUERY_KEY],
		async (recipe: Recipe) => recipeService.deleteRecipe(recipe),
		{
			async onSuccess() {
				void queryClient.invalidateQueries([GET_RECIPES_QUERY_KEY]);
			}
		}
	);

	return {
		deleteRecipe: mutate,
		isError
	};
};
