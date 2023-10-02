import { useQuery } from 'react-query';
import { type QueryGetter, type QueryBasicParams, type QueryControl } from '@cooke/types';
import { recipeService } from '../recipe.service';
import { recipesStore } from '@cooke/stores/recipes-store';

export const GET_RECIPES_QUERY_KEY = 'get_recipes_key';

export const useGetRecipes = (props?: QueryBasicParams): QueryGetter => {
	const { isError, isLoading } = useQuery(
		[GET_RECIPES_QUERY_KEY, props?.search],
		async () => {
			recipesStore.recipes = undefined;
			return recipeService.getRecipes({ search: props?.search });
		},
		{
			onSuccess(data) {
				recipesStore.recipes = data;
			},
			onError() {
				recipesStore.recipes = null;
			}
		}
	);

	return {
		isError,
		isLoading
	};
};
