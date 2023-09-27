import { type Recipe } from '@cooke/types';
import { type WizardServiceApi } from './wizard.interface';
import { RECIPE_TEMPLATE } from './templates';

class WizardService implements WizardServiceApi {
	getRecipeTemplate(): Recipe {
		return {
			...RECIPE_TEMPLATE,
			id: crypto.randomUUID()
		};
	}
}

export const wizardService = new WizardService();
