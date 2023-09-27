import { type PreparationStep, type Ingredient, type Recipe } from '@cooke/types';

export interface WizardServiceApi {
	getRecipeTemplate: () => Recipe;
	getIngredientTemplate: () => Ingredient;
	getPreparationStepTemplate: (stepCount: number) => PreparationStep;
}
