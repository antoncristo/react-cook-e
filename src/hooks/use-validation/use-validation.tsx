import { useCallback, useState } from 'react';
import {
	type ValidationHandlers,
	type ValidationEntry,
	type ValidationError
} from './use-validation.types';

const checkValidationErrors = <T,>(entry: ValidationEntry<T>): ValidationError | null => {
	let error: ValidationError | null = null;
	entry.validators?.forEach(validatorFn => {
		error = validatorFn(entry.value);
	});

	return error;
};

/**
 *
 * @param validate - array of entries `(see ValidationEntry<T>)` representing the inputs of the form.
 *
 * @returns
 */
export const useValidation = <T,>(
	validate: Array<ValidationEntry<T>>
): ValidationHandlers<T> => {
	const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
	const errors: Partial<Record<keyof T, string>> = {};

	validate.forEach(formInput => {
		const _error = checkValidationErrors(formInput);

		if (_error) {
			errors[formInput.key] = _error.errorCode;
		}
	});

	const isInputValid = (formKey: keyof T) => Boolean(!errors[formKey]);

	const markAsTouched = useCallback((formKey: keyof T) => {
		setTouched(prev => ({ ...prev, [formKey]: true }));
	}, []);

	return {
		errors,
		isFormValid: !Object.keys(errors).length,
		isInputValid,
		markAsTouched,
		touched
	};
};
