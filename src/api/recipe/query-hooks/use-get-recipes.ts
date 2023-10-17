import { useQuery } from 'react-query';
import { type QueryGetter, type QueryBasicParams, type QueryControl } from '@cooke/types';
import { recipeService } from '../recipe.service';
import { recipesStore } from '@cooke/stores/recipes-store';
import { errorHandler } from '@cooke/utils';

export const GET_RECIPES_QUERY_KEY = 'get_recipes_key';

export const useGetRecipes = (props?: QueryBasicParams): QueryGetter => {
	const { isError, isLoading } = useQuery(
		[GET_RECIPES_QUERY_KEY, props?.search],
		async () => {
			recipesStore.recipes = undefined;
			return recipeService.getRecipes({ search: props?.search });
		},
		{
			onSuccess(response) {
				recipesStore.recipes = response.data;
			},
			onError(err) {
				recipesStore.recipes = null;
				errorHandler(err);
			}
		}
	);

	return {
		isError,
		isLoading
	};
};
