import { type Recipe } from '@cooke/types';
import { cookePathnames, injectRecipeUUID } from '@cooke/router';
import { BookPageIcon, WriteIcon } from '@cooke/assets';

import * as Styled from './card-mask.styled';

export const CardMask = ({
	recipe,
	deleteRecipe
}: {
	recipe: Recipe;
	deleteRecipe: () => void;
}) => (
	<Styled.CardMask className='mask'>
		<Styled.LinkButton
			to={injectRecipeUUID(cookePathnames.authenticatedPathNames.READ_RECIPE, recipe.id)}
		>
			<BookPageIcon right='1rem' />
			Go To Recipe
		</Styled.LinkButton>
		<Styled.LinkButton
			to={injectRecipeUUID(cookePathnames.authenticatedPathNames.EDIT_RECIPE, recipe.id)}
		>
			<WriteIcon right='1rem' />
			Edit
		</Styled.LinkButton>
		<Styled.CardButton onClick={deleteRecipe}>Delete</Styled.CardButton>
	</Styled.CardMask>
);
