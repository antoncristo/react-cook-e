import { Link } from 'react-router-dom';
import { Button } from '@cooke/shared';
import { type Recipe } from '@cooke/types';
import { cookePathnames, injectRecipeUUID } from '@cooke/router';

import * as Styled from './card-mask.styled';

export const CardMask = ({ recipe }: { recipe: Recipe }) => (
	<Styled.CardMask className='mask'>
		<Styled.LinkButton
			to={injectRecipeUUID(cookePathnames.authenticatedPathNames.READ_RECIPE, recipe.id)}
		>
			Go To Recipe
		</Styled.LinkButton>
		<Styled.LinkButton
			to={injectRecipeUUID(cookePathnames.authenticatedPathNames.EDIT_RECIPE, recipe.id)}
		>
			Edit
		</Styled.LinkButton>
	</Styled.CardMask>
);
