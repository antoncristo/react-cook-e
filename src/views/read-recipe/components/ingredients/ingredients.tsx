import { type Recipe } from '@cooke/types';
import { Text } from '@cooke/shared';

import * as Styled from './ingredients.styled';
import { useTranslation } from 'react-i18next';

interface IngredientsProps {
	recipe: Recipe;
}

export const Ingredients = (props: IngredientsProps) => {
	const { t } = useTranslation('recipe');
	const { recipe } = props;

	return (
		<Styled.Ingredients>
			<Styled.IngredientsTitle text={t('ingredients')} fontSize='2.3rem' />
			<Styled.IngredientsList>
				{recipe.ingredients.map(ing => (
					<Styled.IngredientItem key={ing.id}>
						<span>{ing.name}</span>
						<span>
							{ing.amount} {ing.unit}
						</span>
					</Styled.IngredientItem>
				))}
			</Styled.IngredientsList>
		</Styled.Ingredients>
	);
};
