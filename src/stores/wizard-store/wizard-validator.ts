import { type PreparationStep, type Ingredient, type Recipe } from '@cooke/types';
import { GroupInputValidator, SimpleInputValidator } from '@cooke/utils/validation';
import { makeAutoObservable } from 'mobx';

export class WizardValidator {
	private _title = new SimpleInputValidator();
	private _description = new SimpleInputValidator();
	private _ingredients = new GroupInputValidator<Ingredient>();
	private _steps = new GroupInputValidator<PreparationStep>();

	// Remove
	constructor() {
		makeAutoObservable(this);
	}

	get titleValidation() {
		return this._title;
	}

	get descriptionValidation() {
		return this._description;
	}

	ingredientValidation() {
		return this._ingredients;
	}

	stepsValidation() {
		return this._steps;
	}

	touchAll() {
		this._title.isTouched = true;
		this._description.isTouched = true;
		this._ingredients.markAsTouchedAll();
		this._steps.markAsTouchedAll();
	}

	preValidate(recipe: Recipe) {
		this._title.runValidation(recipe.title);
		this._description.runValidation(recipe.description);
		recipe.ingredients.forEach(ing => {
			this._ingredients.getInputValidator(ing.id).runValidation(ing.name);
		});
		recipe.steps.forEach(step => {
			this._steps.getInputValidator(step.id).runValidation(step.description);
		});
	}

	isRecipeValid() {
		return (
			this._title.isValid &&
			this._description.isValid &&
			this._ingredients.isGroupValid() &&
			this._steps.isGroupValid()
		);
	}

	resetValidator() {
		this._title = new SimpleInputValidator();
		this._description = new SimpleInputValidator();
		this._ingredients = new GroupInputValidator<Ingredient>();
		this._steps = new GroupInputValidator<PreparationStep>();
	}
}

export const wizardValidator = new WizardValidator();
