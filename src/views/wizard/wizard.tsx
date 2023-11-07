import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Init } from '@cooke/init';
import { type Recipe } from '@cooke/types';
import { wizardStore, wizardValidator } from '@cooke/stores/wizard-store';

import {
	DishDescription,
	DishName,
	Ingredients,
	PreparationSteps,
	Submit
} from './components';
import { RECIPE_TEMPLATE } from './templates';
import { useInitEditMode } from './hooks';

import * as Styled from './wizard.styled';

export const Wizard = observer(() => {
	const params = useParams() as Record<'recipeid', UUID>;
	const editModeRecipe = useInitEditMode(params.recipeid);

	useEffect(() => {
		if (params.recipeid === undefined) {
			wizardStore.initRecipeFromTemplate(RECIPE_TEMPLATE, false);
		}

		if (editModeRecipe) {
			wizardStore.initRecipeFromTemplate(
				JSON.parse(JSON.stringify(editModeRecipe)) as Recipe,
				true
			);

			setTimeout(() => {
				wizardValidator.preValidate(editModeRecipe);
			}, 0);
		}

		return () => {
			wizardValidator.resetValidator();
			wizardStore.resetWizard();
		};
	}, [editModeRecipe]);

	return (
		<Init>
			<Styled.Wizard>
				<Styled.WizardFlex>
					<DishName />
					<DishDescription />
					<Ingredients />
					<PreparationSteps />
					<Submit />
				</Styled.WizardFlex>
			</Styled.Wizard>
		</Init>
	);
});
