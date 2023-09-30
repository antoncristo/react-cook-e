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
	private readonly group: T[] = [];

	constructor() {
		makeAutoObservable(this);
	}
}
