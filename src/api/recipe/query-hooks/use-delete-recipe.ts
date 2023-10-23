import { type Recipe } from '@cooke/types';
import { useMutation } from '@tanstack/react-query';
import { recipeService } from '../recipe.service';
import { queryClient } from '@cooke/api/query-client';
import { GET_RECIPES_QUERY_KEY } from './use-get-recipes';
import { successHandler } from '@cooke/utils';

export const DELETE_RECIPE_QUERY_KEY = 'delete_recipe_key';

export const useDeleteRecipe = () => {
	const { mutate, isError } = useMutation({
		mutationKey: [DELETE_RECIPE_QUERY_KEY],
		mutationFn: async (recipe: Recipe) => recipeService.deleteRecipe(recipe),
		onSuccess() {
			void queryClient.invalidateQueries({ queryKey: [GET_RECIPES_QUERY_KEY] });
			successHandler({
				msg: 'Successfully DELETED :)'
			});
		}
	});

	return {
		deleteRecipe: mutate,
		isError
	};
};
