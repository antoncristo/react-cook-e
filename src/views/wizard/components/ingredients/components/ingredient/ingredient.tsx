import { type MeasurementUnit, type Recipe } from '@cooke/types';
import { Option, Select, Text } from '@cooke/shared';
import { Colors } from '@cooke/style';

import * as Styled from './ingredient.styled';

interface IngredientProps {
	recipe: Recipe;
	ingredientIndex: number;
}

export const Ingredient = (props: IngredientProps) => {
	const { ingredientIndex, recipe } = props;
	const _ingredient = recipe.ingredients[ingredientIndex];
	const unitsOptions: MeasurementUnit[] = [
		'cup',
		'g',
		'kg',
		'l',
		'ml',
		'table-spoon',
		'tea-spoon',
		'unit'
	];

	return (
		<Styled.Ingredient tabIndex={0}>
			<Styled.IngredientInput width='4rem' type='number' placeholder='1' />
			<Select>
				{unitsOptions.map(val => (
					<Option key={val} selected={_ingredient.unit === val} label={val} value={val} />
				))}
			</Select>
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
