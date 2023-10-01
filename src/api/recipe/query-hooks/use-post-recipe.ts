import { useMutation } from 'react-query';
import { recipeService } from '../recipe.service';
import { type Recipe } from '@cooke/types';
import { queryClient } from '@cooke/api/query-client';
import { GET_RECIPES_QUERY_KEY } from './use-get-recipes';

export const POST_RECIPE_QUERY_KEY = 'post_recipe_key';

export const usePostRecipe = () => {
	const { isError, mutate } = useMutation(
		[POST_RECIPE_QUERY_KEY],
		async (recipe: Recipe) => recipeService.postRecipe(recipe),
		{
			async onSuccess() {
				void queryClient.invalidateQueries([GET_RECIPES_QUERY_KEY]);
			}
		}
	);

	return {
		postRecipe: mutate,
		isError
	};
};
