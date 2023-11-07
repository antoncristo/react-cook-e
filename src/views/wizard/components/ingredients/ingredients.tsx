import { type ChangeEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { wizardStore, wizardValidator } from '@cooke/stores/wizard-store';
import { type MeasurementUnit } from '@cooke/types';

import { Ingredient } from './components';

import * as Styled from './ingredients.styled';

export const Ingredients = observer(() => {
	const { t } = useTranslation('wizard', { keyPrefix: 'ingredients' });
	const { ingredients } = wizardStore;
	const { ingredientValidation } = wizardValidator;

	const addIngredient = () => {
		wizardStore.addIngredient();
	};

	const addIngredientBelow = (pusherIndex: number) => {
		wizardStore.addIngredientBelow(pusherIndex);
	};

	const deleteIngredient = (index: number) => {
		wizardStore.deleteIngredient(index);
	};

	const changeName =
		(index: number): ChangeEventHandler<HTMLInputElement> =>
		change => {
			wizardStore.changeIngredientName(index, change.currentTarget.value);
		};

	const changeAmount =
		(index: number): ChangeEventHandler<HTMLInputElement> =>
		change => {
			const updatedAmount = parseFloat(change.currentTarget.value);
			if (updatedAmount >= 0.1) {
				wizardStore.changeIngredientAmount(index, parseFloat(change.currentTarget.value));
			}
		};

	const changeUnit =
		(index: number): ChangeEventHandler<HTMLSelectElement> =>
		change => {
			wizardStore.changeIngredientUnit(
				index,
				change.currentTarget.value as MeasurementUnit
			);
		};

	return (
		<Styled.Ingredients>
			<Styled.Header>
				<Styled.IngredientsTitle>{t('section')}</Styled.IngredientsTitle>
				<Styled.ControlButton onClick={addIngredient}>
					{t('buttons.add')}
				</Styled.ControlButton>
			</Styled.Header>
			{ingredients.map((ingredient, index) => (
				<Ingredient
					key={ingredient.id}
					ingredient={ingredient}
					add={() => {
						addIngredientBelow(index);
					}}
					deleteIng={() => {
						deleteIngredient(index);
					}}
					changeName={changeName(index)}
					changeAmount={changeAmount(index)}
					changeUnit={changeUnit(index)}
				/>
			))}
		</Styled.Ingredients>
	);
});
