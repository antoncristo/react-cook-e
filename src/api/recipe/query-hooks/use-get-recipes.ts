import { useQuery } from 'react-query';
import { type QueryBasicParams, type QueryControl } from '@cooke/types';
import { recipeService } from '../recipe.service';

export const GET_RECIPES_QUERY_KEY = 'get_recipes_key';

export const useGetRecipes = (props?: QueryControl & QueryBasicParams) => {
	const { data, isError, isLoading } = useQuery(
		[GET_RECIPES_QUERY_KEY, props?.search],
		async () => recipeService.getRecipes({ search: props?.search }),
		{
			staleTime: 300000,
			enabled: props?.enabled ?? true
		}
	);

	return {
		recipes: data,
		isError,
		isLoading
	};
};
