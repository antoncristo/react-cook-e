import { useDeleteRecipe, useGetRecipes } from '@cooke/api/recipe';
import { type Recipe } from '@cooke/types';

import { RecipeCard } from './components';

import * as Styled from './dashboard.styled';

export const Dashboard = () => {
	const { recipes, isError, isLoading } = useGetRecipes();
	const { deleteRecipe } = useDeleteRecipe();

	if (isError) {
		// Fix: https://trello.com/c/u9WwNHFK/18-add-loader-and-error
		return <div>Error...</div>;
	}

	if (isLoading) {
		// Fix: https://trello.com/c/u9WwNHFK/18-add-loader-and-error
		return <div>Loader...</div>;
	}

	const deleteHandler = (recipe: Recipe) => {
		deleteRecipe(recipe);
	};

	return (
		<Styled.Dashboard>
			<Styled.TopBar>search</Styled.TopBar>
			<Styled.RecipesFlex>
				{recipes?.map(recipe => (
					<RecipeCard deleteRecipe={deleteHandler} key={recipe.id} recipe={recipe} />
				))}
			</Styled.RecipesFlex>
		</Styled.Dashboard>
	);
};
