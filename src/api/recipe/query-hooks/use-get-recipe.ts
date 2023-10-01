import { useQuery } from 'react-query';
import { recipeService } from '../recipe.service';

export const GET_RECIPE_QUERY_KEY = 'get_recipe_key';

export const useGetRecipe = ({
	recipeID,
	enabled = true
}: {
	recipeID: UUID;
	enabled?: boolean;
}) => {
	const { data, isError, isLoading } = useQuery(
		[GET_RECIPE_QUERY_KEY, recipeID],
		async () => recipeService.getRecipe(recipeID),
		{ enabled }
	);

	return {
		recipe: data,
		isError,
		isLoading
	};
};
