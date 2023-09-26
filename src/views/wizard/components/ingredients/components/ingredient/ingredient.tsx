import { type Recipe } from '@cooke/types';
import { Text } from '@cooke/shared';

import * as Styled from './ingredient.styled';
import { Colors } from '@cooke/style';

interface IngredientProps {
	recipe: Recipe;
	ingredientIndex: number;
}

export const Ingredient = (props: IngredientProps) => {
	const { ingredientIndex, recipe } = props;
	const _ingredient = recipe.ingredients[ingredientIndex];

	return (
		<Styled.Ingredient tabIndex={0}>
			<Styled.IngredientInput width='4rem' type='number' placeholder='1' />
			<Text maxWidth='3rem' text='unit' />
			<Text
				maxWidth='3rem'
				fontSize='1.4rem'
				style={{ color: `rgba(${Colors.WHITE},1)` }}
				text='of'
			/>
			<Styled.IngredientInput placeholder='Ingredient name...' width='22rem' />
			<Styled.Controls>
				<Styled.ControlButton>Add</Styled.ControlButton>
				<Styled.ControlButton variant='secondary'>Delete</Styled.ControlButton>
			</Styled.Controls>
		</Styled.Ingredient>
	);
};
