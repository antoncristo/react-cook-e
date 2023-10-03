import { useEffect, type ChangeEventHandler, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { type Ingredient as IngredientType, type MeasurementUnit } from '@cooke/types';
import { wizardValidator } from '@cooke/stores/wizard-store';
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

export const Ingredient = observer((props: IngredientProps) => {
	const _ref = useRef<HTMLDivElement>(null);
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

	const isNameValid =
		wizardValidator.ingredientValidation().getInputValidator(ingredient.id)?.isValid ??
		true;
	const isNameTouched =
		wizardValidator.ingredientValidation().getInputValidator(ingredient.id)?.isTouched ??
		false;

	const onChangeNameHandler: ChangeEventHandler<HTMLInputElement> = change => {
		wizardValidator
			.ingredientValidation()
			.getInputValidator(ingredient.id)
			.runValidation(change.currentTarget.value);
		changeName(change);
	};

	const onDeleteHandler = () => {
		deleteIng();
		wizardValidator.ingredientValidation().deleteInputValidation(ingredient.id);
	};

	const markAsTouched = () => {
		wizardValidator.ingredientValidation().markAsTouched(ingredient.id);
	};

	useEffect(() => {
		wizardValidator.ingredientValidation().addSimpleValidation(ingredient.id);
		_ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		_ref.current?.focus();
	}, []);

	return (
		<Styled.Ingredient ref={_ref} onBlur={markAsTouched} tabIndex={0}>
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
				isValid={isNameValid || !isNameTouched}
				onChange={onChangeNameHandler}
				placeholder={
					isNameTouched ? 'Ingredient name is required...' : 'Ingredient name...'
				}
				width='22rem'
			/>
			<Styled.Controls>
				<Styled.ControlButton onClick={add}>Add</Styled.ControlButton>
				<Styled.ControlButton variant='secondary' onClick={onDeleteHandler}>
					Delete
				</Styled.ControlButton>
			</Styled.Controls>
		</Styled.Ingredient>
	);
});
