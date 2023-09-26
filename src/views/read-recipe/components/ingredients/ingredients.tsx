import { type Recipe } from '@cooke/types';
import { Text } from '@cooke/shared';

import * as Styled from './ingredients.styled';

interface IngredientsProps {
	recipe: Recipe;
}

export const Ingredients = (props: IngredientsProps) => {
	const { recipe } = props;

	return (
		<Styled.Ingredients>
			<Styled.IngredientsTitle text='Ingredients' fontSize='2rem' />
			<Styled.IngredientsList>
				{recipe.ingredients.map(ing => (
					<Styled.IngredientItem key={ing.name}>
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
