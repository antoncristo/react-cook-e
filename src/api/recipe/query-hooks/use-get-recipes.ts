import { useQuery } from '@tanstack/react-query';
import { type QueryBasicParams } from '@cooke/types';
import { recipeService } from '../recipe.service';

export const GET_RECIPES_QUERY_KEY = 'get_recipes_key';

export const useGetRecipes = (props?: QueryBasicParams) => {
	const { isError, isPending, data, isSuccess } = useQuery({
		queryKey: [GET_RECIPES_QUERY_KEY, props?.search],
		async queryFn() {
			return recipeService.getRecipes({ search: props?.search });
		}
	});

	return {
		fetchedRecipes: data,
		isRecipesSuccess: isSuccess,
		isRecipesError: isError,
		isRecipesPending: isPending
	};
};
