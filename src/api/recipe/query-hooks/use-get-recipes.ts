import { useQuery } from '@tanstack/react-query';
import { type QueryBasicParams } from '@cooke/types';
import { recipeService } from '../recipe.service';

export const GET_RECIPES_QUERY_KEY = 'get_recipes_key';

export const useGetRecipes = (props?: QueryBasicParams) => {
	const { isError, isPending, data, isSuccess, isFetching } = useQuery({
		queryKey: [GET_RECIPES_QUERY_KEY, props?.search],
		async queryFn() {
			return recipeService.getRecipes({ search: props?.search });
		},
		enabled: Boolean(props?.enabled),
		staleTime: props?.search ? 600000 : 3600000
	});

	return {
		fetchedRecipes: data,
		isRecipesSuccess: isSuccess,
		isRecipesError: isError,
		isRecipesPending: isPending,
		isRecipeFetching: isFetching
	};
};
