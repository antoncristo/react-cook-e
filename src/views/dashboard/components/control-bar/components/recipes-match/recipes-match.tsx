import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { CloseIcon } from '@cooke/assets';
import { Loader, Text } from '@cooke/shared';
import { useGetRecipes } from '@cooke/api/recipe';
import { recipesStore } from '@cooke/stores/recipes-store';

import { MatchItem } from './components';

import * as Styled from './recipes-match.styled';

interface RecipesMatchProps {
	resetSearch: () => void;
}

export const RecipesMatch = observer((props: RecipesMatchProps) => {
	const { resetSearch } = props;
	const { t } = useTranslation('dashboard', { keyPrefix: 'controls' });
	const { searchQuery } = recipesStore;
	const { fetchedRecipes, isRecipesPending, isRecipesSuccess } = useGetRecipes({
		search: searchQuery,
		enabled: Boolean(searchQuery)
	});

	const noResults = fetchedRecipes?.length === 0;

	return (
		<Styled.RecipesMatch>
			<Styled.MatchHeader>
				<Text text={t('results')} fontSize='1.4rem' numberOfLines={1} />
				<Styled.HeaderButton onClick={resetSearch}>
					<CloseIcon />
				</Styled.HeaderButton>
			</Styled.MatchHeader>
			{isRecipesPending ? <Loader size='M' /> : null}
			{isRecipesSuccess ? (
				<Styled.RecipesList>
					{fetchedRecipes?.map(recipe => (
						<MatchItem key={recipe.id} recipe={recipe} />
					))}
				</Styled.RecipesList>
			) : null}
			{noResults ? (
				<Text
					style={{ textAlign: 'center', height: 'fit-content' }}
					fontSize='1.6rem'
					numberOfLines={3}
					text={t('noMatch', { input: searchQuery })}
				/>
			) : null}
		</Styled.RecipesMatch>
	);
});
