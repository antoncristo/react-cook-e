import { type ChangeEvent, type ChangeEventHandler } from 'react';
import { type Ingredient as IngredientType, type MeasurementUnit } from '@cooke/types';
import { Option, Select, Text } from '@cooke/shared';
import { Colors } from '@cooke/style';

import * as Styled from './ingredient.styled';

interface IngredientProps {
	ingredient: IngredientType;
	add: () => void;
	deleteIng: () => void;
	changeName: ChangeEventHandler<HTMLInputElement>;
	changeAmount: ChangeEventHandler<HTMLInputElement>;
	changeUnit: ChangeEventHandler<HTMLSelectElement>;
}

export const Ingredient = (props: IngredientProps) => {
	const { ingredient, add, deleteIng, changeName, changeAmount, changeUnit } = props;
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
			<Styled.IngredientInput
				value={ingredient.amount}
				onChange={changeAmount}
				width='4rem'
				type='number'
				placeholder='1'
			/>
			<Select onChange={changeUnit}>
				{unitsOptions.map(val => (
					<Option key={val} selected={ingredient.unit === val} label={val} value={val} />
				))}
			</Select>
			<Text
				maxWidth='3rem'
				fontSize='1.4rem'
				style={{ color: `rgba(${Colors.WHITE},1)` }}
				text='of'
			/>
			<Styled.IngredientInput
				value={ingredient.name}
				onChange={changeName}
				placeholder='Ingredient name...'
				width='22rem'
			/>
			<Styled.Controls>
				<Styled.ControlButton onClick={add}>Add</Styled.ControlButton>
				<Styled.ControlButton variant='secondary' onClick={deleteIng}>
					Delete
				</Styled.ControlButton>
			</Styled.Controls>
		</Styled.Ingredient>
	);
};
