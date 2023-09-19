export type ErrorCode = 'REQUIRED' | 'MIN_LENGTH';

export interface ValidationError {
	errorCode: ErrorCode;
}

export type ValidatorFn<T> = (formValue: ValueOf<T>) => ValidationError | null;

export interface ValidationEntry<T> {
	key: keyof T;
	value: ValueOf<T>;
	validators: Array<ValidatorFn<T>>;
}
