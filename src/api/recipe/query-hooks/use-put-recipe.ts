import { useMutation } from 'react-query';
import { recipeService } from '../recipe.service';
import { type Recipe } from '@cooke/types';
import { queryClient } from '@cooke/api/query-client';
import { GET_RECIPES_QUERY_KEY } from './use-get-recipes';

export const PUT_RECIPE_QUERY_KEY = 'put_recipe_key';

export const usePutRecipe = () => {
	const { isError, mutate } = useMutation(
		[PUT_RECIPE_QUERY_KEY],
		async (recipe: Recipe) => recipeService.putRecipe(recipe),
		{
			async onSuccess() {
				void queryClient.invalidateQueries([GET_RECIPES_QUERY_KEY]);
			}
		}
	);

	return {
		putRecipe: mutate,
		isError
	};
};
