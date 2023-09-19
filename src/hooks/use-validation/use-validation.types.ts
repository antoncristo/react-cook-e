export type ErrorCode = 'REQUIRED' | 'MIN_LENGTH';

export interface ValidationError {
	errorCode: ErrorCode;
}

export type ValidatorFn<T> = (formValue: ValueOf<T>) => ValidationError | null;

/**
 * @description Each entry represents a form input
 * @param key the accessor for the input
 * @param value this must be synced with the state of the input
 * @param validators optional array of validators of type 'ValidatorFn<T>'
 */
export interface ValidationEntry<T> {
	key: keyof T;
	value: ValueOf<T>;
	validators?: Array<ValidatorFn<T>>;
}

export interface ValidationHandlers<T> {
	errors: AbstractObject;
	isFormValid: boolean;
	isInputValid: (formKey: keyof T) => boolean;
	markAsTouched: (formKey: keyof T) => void;
	touched: Partial<Record<keyof T, boolean>>;
}
