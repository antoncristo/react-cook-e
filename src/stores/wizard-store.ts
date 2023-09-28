import {
	type MeasurementUnit,
	type Ingredient,
	type Recipe,
	type PreparationStep
} from '@cooke/types';
import { recordUpdate } from '@cooke/utils';
import { wizardService } from '@cooke/views/wizard/wizard.service';
import { makeAutoObservable } from 'mobx';

class WizardStore {
	private readonly _id: UUID = crypto.randomUUID();
	private _title: Recipe['title'] = '';
	private _description: Recipe['description'] = '';
	private readonly _ingredients: Recipe['ingredients'] = [];
	private readonly _steps: Recipe['steps'] = [];

	constructor() {
		makeAutoObservable(this);
	}

	get title() {
		return this._title;
	}

	set title(update: Recipe['title']) {
		this._title = update;
	}

	get description() {
		return this._description;
	}

	set description(update: Recipe['description']) {
		this._description = update;
	}

	get ingredients() {
		return this._ingredients;
	}

	get recipe(): Recipe {
		return {
			id: this._id,
			title: this._title,
			description: this._description,
			ingredients: this._ingredients,
			steps: this._steps
		};
	}

	addIngredient() {
		const newIngredient: Ingredient = wizardService.getIngredientTemplate();
		this._ingredients.push(newIngredient);
	}

	addIngredientBelow(pusherIndex: number) {
		const newIngredient: Ingredient = wizardService.getIngredientTemplate();
		this._ingredients.splice(pusherIndex + 1, 0, newIngredient);
	}

	deleteIngredient(indexToDelete: number) {
		this._ingredients.splice(indexToDelete, 1);
	}

	changeIngredientName(ingredientIndex: number, nameUpdate: string) {
		const _ingredient = this._ingredients[ingredientIndex];
		const updatedRecord = recordUpdate(_ingredient, 'name', nameUpdate);

		this._ingredients[ingredientIndex] = updatedRecord;
	}

	changeIngredientAmount(ingredientIndex: number, amountUpdate: number) {
		const _ingredient = this._ingredients[ingredientIndex];
		const updatedRecord = recordUpdate(_ingredient, 'amount', amountUpdate);

		this._ingredients[ingredientIndex] = updatedRecord;
	}

	changeIngredientUnit(ingredientIndex: number, unitUpdate: MeasurementUnit) {
		const _ingredient = this._ingredients[ingredientIndex];
		const updatedRecord = recordUpdate(_ingredient, 'unit', unitUpdate);

		this._ingredients[ingredientIndex] = updatedRecord;
	}

	get steps() {
		return this._steps;
	}

	resetStepsCount() {
		this._steps.forEach((step, i) => {
			step.stepCount = i + 1;
		});
	}

	addStep() {
		const newStep: PreparationStep = wizardService.getPreparationStepTemplate(
			this._steps.length + 1
		);

		this._steps.push(newStep);
	}

	addStepBelow(pusherIndex: number) {
		const newStep: PreparationStep = wizardService.getPreparationStepTemplate(
			this._steps.length + 1
		);
		this._steps.splice(pusherIndex + 1, 0, newStep);

		this.resetStepsCount();
	}

	deleteStep(indexToDelete: number) {
		this._steps.splice(indexToDelete, 1);

		this.resetStepsCount();
	}

	swapSteps(swapperIndex: number, direction: 'up' | 'down') {
		const temp: PreparationStep = JSON.parse(JSON.stringify(this._steps[swapperIndex]));

		if (direction === 'up') {
			this._steps[swapperIndex] = this._steps[swapperIndex - 1];
			this._steps[swapperIndex - 1] = temp;
		} else {
			this._steps[swapperIndex] = this._steps[swapperIndex + 1];
			this._steps[swapperIndex + 1] = temp;
		}

		this.resetStepsCount();
	}

	changeStepDescription(stepIndex: number, update: string) {
		const _step = this._steps[stepIndex];

		const updatedRecord = recordUpdate(_step, 'description', update);

		this._steps[stepIndex] = updatedRecord;
	}
}

export const wizardStore = new WizardStore();
