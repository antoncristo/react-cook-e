import { useEffect, type ChangeEventHandler, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { type Ingredient as IngredientType, type MeasurementUnit } from '@cooke/types';
import { wizardValidator } from '@cooke/stores/wizard-store';
import { Option, Select, Text } from '@cooke/shared';

import * as Styled from './ingredient.styled';
import { useThemeContext } from '@cooke/style';

interface IngredientProps {
	ingredient: IngredientType;
	add: () => void;
	deleteIng: () => void;
	changeName: ChangeEventHandler<HTMLInputElement>;
	changeAmount: ChangeEventHandler<HTMLInputElement>;
	changeUnit: ChangeEventHandler<HTMLSelectElement>;
}

export const Ingredient = observer((props: IngredientProps) => {
	const { t } = useTranslation('wizard', { keyPrefix: 'ingredients' });
	const cookeTheme = useThemeContext();
	const _ref = useRef<HTMLInputElement>(null);
	const { ingredient, add, deleteIng, changeName, changeAmount, changeUnit } = props;
	const unitsOptions: MeasurementUnit[] = [
		t('measurementUnits.grams'),
		t('measurementUnits.kilograms'),
		t('measurementUnits.liter'),
		t('measurementUnits.mililiter'),
		t('measurementUnits.cup'),
		t('measurementUnits.tableSpoon'),
		t('measurementUnits.teaSpoon'),
		t('measurementUnits.unit')
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
				style={{ color: `rgba(${cookeTheme.colors.white},1)` }}
				text={t('unitOf')}
			/>
			<Styled.IngredientInput
				ref={_ref}
				onBlur={markAsTouched}
				value={ingredient.name}
				isValid={isNameValid || !isNameTouched}
				onChange={onChangeNameHandler}
				placeholder={isNameTouched ? t('ingredientNameInvalid') : t('ingredientName')}
				width='22rem'
			/>
			<Styled.Controls>
				<Styled.ControlButton onClick={add}>{t('buttons.add')}</Styled.ControlButton>
				<Styled.ControlButton variant='secondary' onClick={onDeleteHandler}>
					{t('buttons.delete')}
				</Styled.ControlButton>
			</Styled.Controls>
		</Styled.Ingredient>
	);
});
