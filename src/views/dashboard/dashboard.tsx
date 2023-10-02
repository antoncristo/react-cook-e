import { observer } from 'mobx-react-lite';
import { recipesStore } from '@cooke/stores/recipes-store';

import { RecipeCard, ControlBar } from './components';

import * as Styled from './dashboard.styled';
import { Loader } from '@cooke/shared';

export const Dashboard = observer(() => {
	const { recipes } = recipesStore;

	return (
		<Styled.Dashboard>
			<ControlBar />
			<Styled.RecipesFlex>
				{recipesStore.isLoading ? <Loader size='M' /> : null}
				{recipesStore.isError ? <div>Error...</div> : null}
				{recipes?.map(recipe => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))}
			</Styled.RecipesFlex>
		</Styled.Dashboard>
	);
});
