import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetRecipe } from '@cooke/api/recipe';
import { type Recipe } from '@cooke/types';
import { wizardStore } from '@cooke/stores/wizard-store';
import { wizardValidator } from '@cooke/stores/wizard-validator';

import {
	DishDescription,
	DishName,
	Ingredients,
	PreparationSteps,
	Submit
} from './components';
import { RECIPE_TEMPLATE } from './templates';

import * as Styled from './wizard.styled';

export const Wizard = () => {
	const params = useParams() as Record<'recipeid', UUID>;
	const { recipe } = useGetRecipe({
		recipeID: params.recipeid,
		enabled: Boolean(params.recipeid)
	});

	useEffect(() => {
		if (recipe) {
			wizardStore.initRecipeFromTemplate(
				JSON.parse(JSON.stringify(recipe)) as Recipe,
				true
			);

			setTimeout(() => {
				wizardValidator.preValidate(recipe);
			}, 0);
		} else {
			wizardStore.initRecipeFromTemplate(RECIPE_TEMPLATE);
		}

		return () => {
			wizardValidator.resetValidator();
		};
	}, [recipe]);

	return (
		<Styled.Wizard>
			<Styled.WizardFlex>
				<Styled.WizardTitle>What`s Cook-E ?</Styled.WizardTitle>
				<DishName />
				<DishDescription />
				<Ingredients />
				<PreparationSteps />
				<Submit />
			</Styled.WizardFlex>
		</Styled.Wizard>
	);
};
