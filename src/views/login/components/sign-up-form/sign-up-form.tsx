import {
	type FormEventHandler,
	type ChangeEventHandler,
	type FocusEventHandler,
	useState
} from 'react';
import { Button, Input } from '@cooke/shared';
import { useValidation } from '@cooke/hooks';
import { recordUpdate } from '@cooke/utils';

import * as SignUpValidators from './validators';

import * as Styled from './sign-up-form.styled';

export const SignUpForm = () => {
	const [credentials, setCredentials] = useState<SignUpCredentials>({
		email: '',
		password: '',
		name: ''
	});

	const { isFormValid, isInputValid, markAsTouched, touched } =
		useValidation<SignUpCredentials>([
			{
				key: 'name',
				value: credentials.name,
				validators: [SignUpValidators.required]
			},
			{
				key: 'email',
				value: credentials.email,
				validators: [SignUpValidators.required]
			},
			{
				key: 'password',
				value: credentials.password,
				validators: [SignUpValidators.required]
			}
		]);

	const onSubmitHandler: FormEventHandler = event => {
		event.preventDefault();
		// Fix: add the sign up mutation
	};

	const onCredentialsChangeHandler: ChangeEventHandler<
		HTMLInputElement
	> = changeEvent => {
		const updatedKey = changeEvent.currentTarget.getAttribute(
			'data-name'
		) as keyof Credentials;
		const updatedValue = changeEvent.currentTarget.value;

		if (updatedKey) {
			setCredentials(
				recordUpdate<SignUpCredentials>(
					credentials,
					updatedKey,
					updatedValue
				) as SignUpCredentials
			);
		}
	};

	const onBlurHandler: FocusEventHandler<HTMLInputElement> = focusEvent => {
		const formKey = focusEvent.currentTarget.getAttribute(
			'data-name'
		)! as keyof Credentials;

		markAsTouched(formKey);
	};

	return (
		<Styled.SignUpForm onSubmit={onSubmitHandler}>
			<Styled.Inputs>
				<Input
					data-name='name'
					name='name'
					value={credentials.name}
					isValid={!touched.name || isInputValid('name')}
					onChange={onCredentialsChangeHandler}
					onBlur={onBlurHandler}
					placeholder={touched.name ? 'name is required...' : 'Your name'}
					autoComplete='name'
				/>
				<Input
					data-name='email'
					name='email'
					value={credentials.email}
					isValid={!touched.email || isInputValid('email')}
					onChange={onCredentialsChangeHandler}
					onBlur={onBlurHandler}
					placeholder={touched.email ? 'email is required...' : 'email@example.com'}
					autoComplete='email'
				/>
				<Input
					data-name='password'
					name='password'
					value={credentials.password}
					isValid={!touched.password || isInputValid('password')}
					onChange={onCredentialsChangeHandler}
					onBlur={onBlurHandler}
					type='password'
					placeholder={touched.password ? 'password is required...' : 'password'}
					autoComplete='new-password'
				/>
			</Styled.Inputs>
			<Styled.Controls>
				<Button disabled={!isFormValid} variant='primary' width='25.2rem' type='submit'>
					CREATE
				</Button>
			</Styled.Controls>
		</Styled.SignUpForm>
	);
};
