import { useMutation } from '@tanstack/react-query';
import { type Recipe } from '@cooke/types';
import { queryClient } from '@cooke/api/query-client';
import { errorHandler, successHandler } from '@cooke/utils';
import { GET_RECIPES_QUERY_KEY } from './use-get-recipes';
import { recipeService } from '../recipe.service';

export const PUT_RECIPE_QUERY_KEY = 'put_recipe_key';

export const usePutRecipe = () => {
	const { isError, mutate, isSuccess, isPending } = useMutation({
		mutationKey: [PUT_RECIPE_QUERY_KEY],
		mutationFn: async (recipe: Recipe) => recipeService.putRecipe(recipe),
		onSuccess(data) {
			void queryClient.invalidateQueries({ queryKey: [GET_RECIPES_QUERY_KEY] });
			successHandler({
				msg: `Successfully UPDATED '${data?.title}' recipe :)`
			});
		}
	});

	return {
		putRecipe: mutate,
		isPutError: isError,
		isPutSuccess: isSuccess,
		isPutLoading: isPending
	};
};
