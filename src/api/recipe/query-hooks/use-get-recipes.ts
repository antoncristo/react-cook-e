import { useQuery } from 'react-query';
import { recipeService } from '../recipe.service';

export const GET_RECIPES_QUERY_KEY = 'get_recipes_key';

export const useGetRecipes = () => {
	const { data, isError, isLoading } = useQuery([GET_RECIPES_QUERY_KEY], async () =>
		recipeService.getRecipes()
	);

	return {
		recipes: data,
		isError,
		isLoading
	};
};
