import { useMutation } from '@tanstack/react-query';
import { type Recipe } from '@cooke/types';
import { queryClient } from '@cooke/api/query-client';
import { successHandler } from '@cooke/utils';
import { GET_RECIPES_QUERY_KEY } from './use-get-recipes';
import { recipeService } from '../recipe.service';
import { useTranslation } from 'react-i18next';

export const PUT_RECIPE_QUERY_KEY = 'put_recipe_key';

export const usePutRecipe = () => {
	const { t } = useTranslation('alerts', { keyPrefix: 'success' });
	const { isError, mutate, isSuccess, isPending } = useMutation({
		mutationKey: [PUT_RECIPE_QUERY_KEY],
		mutationFn: async (recipe: Recipe) => recipeService.putRecipe(recipe),
		onSuccess(data) {
			void queryClient.invalidateQueries({ queryKey: [GET_RECIPES_QUERY_KEY] });
			successHandler({
				msg: t('recipeUpdated', { title: data?.title })
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
