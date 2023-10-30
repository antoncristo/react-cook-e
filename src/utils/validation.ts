import { makeAutoObservable } from 'mobx';

export class SimpleInputValidator {
	private _isValid: boolean = false;
	private _isTouched: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	get isValid() {
		return this._isValid;
	}

	set isValid(isValid: boolean) {
		this._isValid = isValid;
	}

	get isTouched() {
		return this._isTouched;
	}

	set isTouched(isTouched: boolean) {
		this._isTouched = isTouched;
	}

	runValidation(value: string) {
		if (value) {
			this.isValid = true;
		} else {
			this.isValid = false;
		}
	}
}

export class GroupInputValidator<T> {
	private readonly group: Record<UUID, SimpleInputValidator> = {};

	addSimpleValidation(inputId: UUID) {
		this.group[inputId] = new SimpleInputValidator();
	}

	getInputValidator(inputId: UUID): SimpleInputValidator {
		return this.group[inputId];
	}

	deleteInputValidation(inputId: UUID) {
		delete this.group[inputId];
	}

	markAsTouched(inputId: UUID) {
		this.group[inputId].isTouched = true;
	}

	markAsTouchedAll() {
		const inputIDs = Object.keys(this.group) as UUID[];
		inputIDs.forEach(inputId => {
			this.markAsTouched(inputId);
		});
	}

	isGroupValid(): boolean {
		const inputIDs = Object.keys(this.group) as UUID[];
		return inputIDs.length
			? inputIDs.every((input: UUID) => this.group[input].isValid)
			: false;
	}
}
