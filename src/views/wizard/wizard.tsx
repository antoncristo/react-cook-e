import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { Init } from '@cooke/init';
import { type Recipe } from '@cooke/types';
import { wizardStore, wizardValidator } from '@cooke/stores/wizard-store';
import { recipesStore } from '@cooke/stores/recipes-store';

import {
	DishDescription,
	DishName,
	Ingredients,
	PreparationSteps,
	Submit
} from './components';
import { RECIPE_TEMPLATE } from './templates';

import * as Styled from './wizard.styled';

export const Wizard = observer(() => {
	const { t } = useTranslation('wizard');
	const params = useParams() as Record<'recipeid', UUID>;
	const recipe = recipesStore.getRecipe(params.recipeid);

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
			wizardStore.initRecipeFromTemplate(RECIPE_TEMPLATE, false);
		}

		return () => {
			wizardValidator.resetValidator();
			wizardStore.resetWizard();
		};
	}, [recipe]);

	return (
		<Init>
			<Styled.Wizard>
				<Styled.WizardFlex>
					<Styled.WizardTitle>{t('viewTitle')}</Styled.WizardTitle>
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
