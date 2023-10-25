import { useMutation } from '@tanstack/react-query';
import { type Recipe } from '@cooke/types';
import { queryClient } from '@cooke/api/query-client';
import { successHandler } from '@cooke/utils';
import { GET_RECIPES_QUERY_KEY } from './use-get-recipes';
import { recipeService } from '../recipe.service';
import { useTranslation } from 'react-i18next';

export const POST_RECIPE_QUERY_KEY = 'post_recipe_key';

export const usePostRecipe = () => {
	const { t } = useTranslation('alerts', { keyPrefix: 'success' });
	const { isError, mutate, isSuccess, isPending } = useMutation({
		mutationKey: [POST_RECIPE_QUERY_KEY],
		mutationFn: async (recipe: Recipe) => recipeService.postRecipe(recipe),
		onSuccess(data) {
			void queryClient.invalidateQueries({ queryKey: [GET_RECIPES_QUERY_KEY] });
			successHandler({ msg: t('recipeCreated', { title: data?.title }) });
		}
	});

	return {
		postRecipe: mutate,
		isPostError: isError,
		isPostSuccess: isSuccess,
		isPostLoading: isPending
	};
};
