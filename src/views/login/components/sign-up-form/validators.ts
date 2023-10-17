import { type ValidatorFn } from '@cooke/hooks/use-validation';

export const required: ValidatorFn<ExtendedCredentials> = formValue => {
	if (!formValue) {
		return {
			errorCode: 'REQUIRED'
		};
	}

	return null;
};
