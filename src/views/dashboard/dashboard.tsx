import { useGetRecipes } from '@cooke/api/recipe';

import { RecipeCard } from './components';

import * as Styled from './dashboard.styled';

export const Dashboard = () => {
	const { recipes, isError, isLoading } = useGetRecipes();

	if (isError) {
		// Fix: https://trello.com/c/u9WwNHFK/18-add-loader-and-error
	}

	if (isLoading) {
		// Fix: https://trello.com/c/u9WwNHFK/18-add-loader-and-error
		return <div>Loader...</div>;
	}

	return (
		<Styled.Dashboard>
			<Styled.TopBar>search</Styled.TopBar>
			<Styled.RecipesFlex>
				{recipes?.map(recipe => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))}
			</Styled.RecipesFlex>
		</Styled.Dashboard>
	);
};
