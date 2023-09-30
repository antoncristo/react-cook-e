import { SimpleInputValidator } from '@cooke/utils/validation';

export class WizardValidator {
	private readonly _title = new SimpleInputValidator();
	private readonly _description = new SimpleInputValidator();

	get titleValidation() {
		return this._title;
	}

	get descriptionValidation() {
		return this._description;
	}
}

export const wizardValidator = new WizardValidator();
