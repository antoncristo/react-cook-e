import { type PreparationStep, type Ingredient, type Recipe } from '@cooke/types';

export const RECIPE_TEMPLATE: Recipe = {
	id: '1-1-1-1',
	title: '',
	description: '',
	ingredients: [],
	steps: []
};

export const INGREDIENT_TEMPLATE: Ingredient = {
	name: 'Name',
	amount: 1,
	unit: 'unit',
	id: '1-1-1-1'
};

export const PREPARATION_STEP_TEMPLATE: PreparationStep = {
	id: '1-1-1-1',
	stepCount: 0,
	description: ''
};
