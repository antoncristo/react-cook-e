import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { recipesStore } from '@cooke/stores/recipes-store';
import { useGetRecipes } from '@cooke/api/recipe';
import { Loader, NetworkError } from '@cooke/shared';
import { Init } from '@cooke/init';

import { RecipeCard, ControlBar, InitialState } from './components';

import * as Styled from './dashboard.styled';

export const Dashboard = observer(() => {
	const { fetchedRecipes, isRecipesSuccess } = useGetRecipes({ enabled: true });
	const { recipes } = recipesStore;

	const isInitialState = recipes?.length === 0 && !recipesStore.searchQuery;

	useEffect(() => {
		if (isRecipesSuccess) {
			recipesStore.recipes = fetchedRecipes;
		}
	}, [isRecipesSuccess, fetchedRecipes]);

	return (
		<Init>
			<Styled.Dashboard>
				<ControlBar />
				<Styled.RecipesFlex>
					{recipesStore.isLoading ? <Loader size='M' /> : null}
					{recipesStore.isError ? <NetworkError /> : null}
					{isInitialState ? <InitialState /> : null}
					{recipes?.map(recipe => (
						<RecipeCard key={recipe.id} recipe={recipe} />
					))}
				</Styled.RecipesFlex>
			</Styled.Dashboard>
		</Init>
	);
});
