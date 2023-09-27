import {
	type MeasurementUnit,
	type Ingredient,
	type Recipe,
	type PreparationStep
} from '@cooke/types';
import { recordUpdate } from '@cooke/utils';
import { wizardService } from '@cooke/views/wizard/wizard.service';
import { observable } from '@legendapp/state';

class WizardStore {
	#title = observable<Recipe['title']>('');
	#description = observable<Recipe['description']>('');
	#ingredients = observable<Recipe['ingredients']>([]);
	#steps = observable<Recipe['steps']>([]);

	get title() {
		return this.#title.get();
	}

	set title(update: Recipe['title']) {
		this.#title.set(update);
	}

	get description() {
		return this.#description.get();
	}

	set description(update: Recipe['description']) {
		this.#description.set(update);
	}

	get ingredients() {
		return this.#ingredients.get();
	}

	addIngredient() {
		const newIngredient: Ingredient = wizardService.getIngredientTemplate();
		this.#ingredients.push(newIngredient);
	}

	addIngredientBelow(pusherIndex: number) {
		const newIngredient: Ingredient = wizardService.getIngredientTemplate();
		this.#ingredients.splice(pusherIndex + 1, 0, newIngredient);
	}

	deleteIngredient(indexToDelete: number) {
		this.#ingredients.splice(indexToDelete, 1);
	}

	changeIngredientName(ingredientIndex: number, nameUpdate: string) {
		const _ingredient = this.#ingredients[ingredientIndex].get();
		const updatedRecord = recordUpdate(_ingredient, 'name', nameUpdate);

		this.#ingredients[ingredientIndex].set(updatedRecord);
	}

	changeIngredientAmount(ingredientIndex: number, amountUpdate: number) {
		const _ingredient = this.#ingredients[ingredientIndex].get();
		const updatedRecord = recordUpdate(_ingredient, 'amount', amountUpdate);

		this.#ingredients[ingredientIndex].set(updatedRecord);
	}

	changeIngredientUnit(ingredientIndex: number, unitUpdate: MeasurementUnit) {
		const _ingredient = this.#ingredients[ingredientIndex].get();
		const updatedRecord = recordUpdate(_ingredient, 'amount', unitUpdate);

		this.#ingredients[ingredientIndex].set(updatedRecord);
	}

	get steps() {
		return this.#steps.get();
	}

	resetStepsCount() {
		this.#steps.forEach((step, i) => {
			step.stepCount.set(i + 1);
		});
	}

	addStep() {
		const newStep: PreparationStep = wizardService.getPreparationStepTemplate(
			this.#steps.get().length + 1
		);
		this.#steps.push(newStep);
	}

	addStepBelow(pusherIndex: number) {
		const newStep: PreparationStep = wizardService.getPreparationStepTemplate(
			this.#steps.get().length + 1
		);
		this.#steps.splice(pusherIndex + 1, 0, newStep);
		this.resetStepsCount();
	}

	deleteStep(indexToDelete: number) {
		this.#steps.splice(indexToDelete, 1);
		this.resetStepsCount();
	}

	swapSteps(swapperIndex: number, direction: 'up' | 'down') {
		const temp: PreparationStep = JSON.parse(
			JSON.stringify(this.#steps[swapperIndex].get())
		);

		if (direction === 'up') {
			this.#steps[swapperIndex].set(this.#steps[swapperIndex - 1].get());
			this.#steps[swapperIndex - 1].set(temp);
		} else {
			this.#steps[swapperIndex].set(this.#steps[swapperIndex + 1].get());
			this.#steps[swapperIndex + 1].set(temp);
		}

		this.resetStepsCount();
	}

	changeStepDescription(stepIndex: number, update: string) {
		const _step = this.#steps[stepIndex].get();

		const updatedRecord = recordUpdate(_step, 'description', update);

		this.#steps[stepIndex].set(updatedRecord);
	}
}

export const wizardStore = new WizardStore();
