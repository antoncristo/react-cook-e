import { useTranslation } from 'react-i18next';
import { type Recipe } from '@cooke/types';
import { cookePathnames, injectRecipeUUID } from '@cooke/router';
import { BookPageIcon, CopyIcon, WriteIcon } from '@cooke/assets';

import * as Styled from './card-mask.styled';

interface CardMaskProps {
	recipe: Recipe;
	handlers: {
		deleteRecipe: () => void;
		copyRecipe: () => void;
	};
}

export const CardMask = (props: CardMaskProps) => {
	const { recipe, handlers } = props;
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
			<Styled.CardButton
				style={{ display: 'flex', justifyContent: 'flex-start' }}
				onClick={handlers.copyRecipe}
			>
				<CopyIcon right='1rem' />
				{t('copyRecipe')}
			</Styled.CardButton>
			<Styled.CardButton onClick={handlers.deleteRecipe}>
				{t('deleteRecipe')}
			</Styled.CardButton>
		</Styled.CardMask>
	);
};
