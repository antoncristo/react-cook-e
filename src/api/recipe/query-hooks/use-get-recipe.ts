import { useQuery } from 'react-query';
import { type QueryGetter, type QueryBasicParams, type QueryControl } from '@cooke/types';
import { recipeService } from '../recipe.service';
import { recipesStore } from '@cooke/stores/recipes-store';
import { errorHandler } from '@cooke/utils';

export const GET_RECIPE_QUERY_KEY = 'get_recipe_key';

export const useGetRecipe = ({
	enabled = true,
	recipeId
}: {
	recipeId: string;
	enabled?: boolean;
}) => {
	const { data, isError, isLoading } = useQuery(
		[GET_RECIPE_QUERY_KEY, { recipeId }],
		async () => {
			recipesStore.recipes = undefined;
			return recipeService.getRecipe(recipeId);
		},
		{
			enabled,
			staleTime: 3600000,
			onError(err) {
				errorHandler(err);
			}
		}
	);

	return {
		recipe: data,
		isError,
		isLoading
	};
};
