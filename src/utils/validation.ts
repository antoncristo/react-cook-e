/* eslint-disable no-console */
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
		// Remove
		console.log('[markAsTouched]: id:', inputId);
		this.group[inputId].isTouched = true;
		console.log('[after touch group]: ', this.group);
	}

	markAsTouchedAll() {
		// Remove
		const inputIDs = Object.keys(this.group) as UUID[];
		console.log('[touch all IDs]: ', inputIDs);
		inputIDs.forEach(inputId => {
			this.markAsTouched(inputId);
		});
		console.log('[after touch group]: ', this.group);
	}

	isGroupValid(): boolean {
		const inputIDs = Object.keys(this.group) as UUID[];
		return inputIDs.length
			? inputIDs.every((input: UUID) => this.group[input].isValid)
			: false;
	}
}
