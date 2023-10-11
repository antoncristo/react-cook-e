import { useMutation } from 'react-query';
import { type Recipe } from '@cooke/types';
import { queryClient } from '@cooke/api/query-client';
import { errorHandler, successHandler } from '@cooke/utils';
import { GET_RECIPES_QUERY_KEY } from './use-get-recipes';
import { recipeService } from '../recipe.service';

export const POST_RECIPE_QUERY_KEY = 'post_recipe_key';

export const usePostRecipe = () => {
	const { isError, mutate, isSuccess, isLoading } = useMutation(
		[POST_RECIPE_QUERY_KEY],
		async (recipe: Recipe) => recipeService.postRecipe(recipe),
		{
			onSuccess(data) {
				void queryClient.invalidateQueries([GET_RECIPES_QUERY_KEY]);
				successHandler({ msg: `Successfully ADDED '${data.data.title}' recipe :)` });
			},
			onError(err) {
				errorHandler(err);
			}
		}
	);

	return {
		postRecipe: mutate,
		isPostError: isError,
		isPostSuccess: isSuccess,
		isPostLoading: isLoading
	};
};
