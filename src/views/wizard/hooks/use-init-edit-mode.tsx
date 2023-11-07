import { useGetRecipe } from '@cooke/api/recipe';
import { recipesStore } from '@cooke/stores/recipes-store';
import { type Recipe } from '@cooke/types';

export const useInitEditMode = (recipeId: UUID | undefined): Recipe | undefined => {
	if (recipeId === undefined) {
		return undefined;
	}

	const storeRecipe = recipesStore.getRecipe(recipeId);
	const { recipe: fetchedRecipe } = useGetRecipe({
		enabled: storeRecipe === undefined || storeRecipe === null,
		recipeId
	});

	if (storeRecipe) {
		return storeRecipe;
	}

	return fetchedRecipe;
};
