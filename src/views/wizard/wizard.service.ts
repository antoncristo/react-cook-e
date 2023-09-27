import { type PreparationStep, type Ingredient, type Recipe } from '@cooke/types';
import { type WizardServiceApi } from './wizard.interface';
import {
	INGREDIENT_TEMPLATE,
	PREPARATION_STEP_TEMPLATE,
	RECIPE_TEMPLATE
} from './templates';

class WizardService implements WizardServiceApi {
	getRecipeTemplate(): Recipe {
		return {
			...RECIPE_TEMPLATE,
			id: crypto.randomUUID()
		};
	}

	getIngredientTemplate(): Ingredient {
		return {
			...INGREDIENT_TEMPLATE,
			id: crypto.randomUUID()
		};
	}

	getPreparationStepTemplate(stepCount: number): PreparationStep {
		return {
			...PREPARATION_STEP_TEMPLATE,
			stepCount,
			id: crypto.randomUUID()
		};
	}
}

export const wizardService = new WizardService();
