import { type ChangeEventHandler } from 'react';
import { observer } from 'mobx-react-lite';
import { wizardStore } from '@cooke/stores/wizard-store';
import { type MeasurementUnit } from '@cooke/types';

import { Ingredient } from './components';

import * as Styled from './ingredients.styled';
import { useTranslation } from 'react-i18next';

export const Ingredients = observer(() => {
	const { t } = useTranslation('wizard', { keyPrefix: 'ingredients' });
	const { ingredients } = wizardStore;

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
			wizardStore.changeIngredientAmount(index, parseInt(change.currentTarget.value, 10));
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
