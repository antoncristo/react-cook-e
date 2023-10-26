import { type Recipe } from '@cooke/types';
import { cookePathnames, injectRecipeUUID } from '@cooke/router';
import { BookPageIcon, WriteIcon } from '@cooke/assets';

import * as Styled from './card-mask.styled';
import { useTranslation } from 'react-i18next';

export const CardMask = ({
	recipe,
	deleteRecipe
}: {
	recipe: Recipe;
	deleteRecipe: () => void;
}) => {
	const { t } = useTranslation('dashboard', { keyPrefix: 'controls' });
	return (
		<Styled.CardMask className='mask'>
			<Styled.LinkButton
				to={injectRecipeUUID(
					cookePathnames.authenticatedPathNames.READ_RECIPE,
					recipe.id
				)}
			>
				<BookPageIcon right='1rem' />
				{t('readRecipe')}
			</Styled.LinkButton>
			<Styled.LinkButton
				to={injectRecipeUUID(
					cookePathnames.authenticatedPathNames.EDIT_RECIPE,
					recipe.id
				)}
			>
				<WriteIcon right='1rem' />
				{t('editRecipe')}
			</Styled.LinkButton>
			<Styled.CardButton onClick={deleteRecipe}>{t('deleteRecipe')}</Styled.CardButton>
		</Styled.CardMask>
	);
};
