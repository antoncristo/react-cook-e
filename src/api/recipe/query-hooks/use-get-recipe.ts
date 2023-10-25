import { useQuery } from '@tanstack/react-query';
import { recipeService } from '../recipe.service';
import { recipesStore } from '@cooke/stores/recipes-store';

export const GET_RECIPE_QUERY_KEY = 'get_recipe_key';

export const useGetRecipe = ({
	enabled = true,
	recipeId
}: {
	recipeId: string;
	enabled?: boolean;
}) => {
	const { data, isError, isPending } = useQuery({
		queryKey: [GET_RECIPE_QUERY_KEY, { recipeId }],
		async queryFn() {
			recipesStore.recipes = undefined;
			return recipeService.getRecipe(recipeId);
		},
		enabled,
		staleTime: 3600000
	});

	return {
		recipe: data,
		isError,
		isPending
	};
};
