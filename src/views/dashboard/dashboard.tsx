import { observer } from 'mobx-react-lite';
import { recipesStore } from '@cooke/stores/recipes-store';

import { RecipeCard, ControlBar } from './components';

import * as Styled from './dashboard.styled';

export const Dashboard = observer(() => {
	const { recipes } = recipesStore;

	if (recipesStore.isError) {
		// Fix: https://trello.com/c/u9WwNHFK/18-add-loader-and-error
		return <div>Error...</div>;
	}

	if (recipesStore.isLoading) {
		// Fix: https://trello.com/c/u9WwNHFK/18-add-loader-and-error
		return <div>Loader...</div>;
	}

	return (
		<Styled.Dashboard>
			<ControlBar />
			<Styled.RecipesFlex>
				{recipes?.map(recipe => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))}
			</Styled.RecipesFlex>
		</Styled.Dashboard>
	);
});
