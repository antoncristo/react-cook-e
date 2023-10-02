import { observer } from 'mobx-react-lite';
import { recipesStore } from '@cooke/stores/recipes-store';
import { Loader, NetworkError, Text } from '@cooke/shared';

import { RecipeCard, ControlBar, InitialState } from './components';

import * as Styled from './dashboard.styled';

export const Dashboard = observer(() => {
	const { recipes } = recipesStore;

	const isInitialState = recipes?.length === 0 && !recipesStore.searchQuery;
	const isNoSearchMatch = recipes?.length === 0 && recipesStore.searchQuery;

	return (
		<Styled.Dashboard>
			<ControlBar />
			<Styled.RecipesFlex>
				{recipesStore.isLoading ? <Loader size='M' /> : null}
				{recipesStore.isError ? <NetworkError /> : null}
				{isNoSearchMatch ? (
					<Text
						fontSize='2rem'
						text={`No Recipes include the text - "${recipesStore.searchQuery!}"...`}
					/>
				) : null}
				{isInitialState ? <InitialState /> : null}
				{recipes?.map(recipe => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))}
			</Styled.RecipesFlex>
		</Styled.Dashboard>
	);
});
