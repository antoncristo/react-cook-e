import { type Recipe } from '@cooke/types';

export interface WizardServiceApi {
	getRecipeTemplate: () => Recipe;
}
