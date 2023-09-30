import { type PreparationStep, type Ingredient } from '@cooke/types';
import { GroupInputValidator, SimpleInputValidator } from '@cooke/utils/validation';

export class WizardValidator {
	private readonly _title = new SimpleInputValidator();
	private readonly _description = new SimpleInputValidator();
	private readonly _ingredients = new GroupInputValidator<Ingredient>();
	private readonly _steps = new GroupInputValidator<PreparationStep>();

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

	isRecipeValid() {
		return (
			this._title.isValid &&
			this._description.isValid &&
			this._ingredients.isGroupValid() &&
			this._steps.isGroupValid()
		);
	}
}

export const wizardValidator = new WizardValidator();
