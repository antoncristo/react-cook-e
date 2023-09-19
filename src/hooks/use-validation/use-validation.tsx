import { type ValidationEntry } from './use-validation.types';

export const useValidation = <T,>(validate: Array<ValidationEntry<T>>) => {
	const errors: AbstractObject = {};

	type FormKeys = keyof T;

	validate.forEach(formInput => {
		formInput.validators.forEach(validatorFn => {
			const _error = validatorFn(formInput.value);

			if (_error) {
				errors[formInput.key as string] = _error.errorCode;
			}
		});
	});

	const isInputValid = (formKey: FormKeys) => Boolean(!errors[formKey as string]);

	return { errors, isFormValid: !Object.keys(errors).length, isInputValid };
};
