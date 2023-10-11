import { useMutation } from 'react-query';
import { type Recipe } from '@cooke/types';
import { queryClient } from '@cooke/api/query-client';
import { errorHandler } from '@cooke/utils';
import { GET_RECIPES_QUERY_KEY } from './use-get-recipes';
import { recipeService } from '../recipe.service';

export const PUT_RECIPE_QUERY_KEY = 'put_recipe_key';

export const usePutRecipe = () => {
	const { isError, mutate, isSuccess, isLoading } = useMutation(
		[PUT_RECIPE_QUERY_KEY],
		async (recipe: Recipe) => recipeService.putRecipe(recipe),
		{
			onSuccess() {
				void queryClient.invalidateQueries([GET_RECIPES_QUERY_KEY]);
			},
			onError(err) {
				errorHandler(err);
			}
		}
	);

	return {
		putRecipe: mutate,
		isPutError: isError,
		isPutSuccess: isSuccess,
		isPutLoading: isLoading
	};
};
