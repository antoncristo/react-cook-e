import {
	useState,
	type FormEventHandler,
	type ChangeEventHandler,
	type FocusEventHandler
} from 'react';
import { recordUpdate } from '@cooke/utils';
import { Input, Button } from '@cooke/shared';
import { useValidation } from '@cooke/hooks';

import * as loginValidators from './validators';

import * as Styled from './login-form.styled';

export const LoginForm = () => {
	const [credentials, setCredentials] = useState<Credentials>({
		email: '',
		password: ''
	});

	const { errors, isFormValid, isInputValid, markAsTouched, touched } = useValidation([
		{
			key: 'email',
			value: credentials.email,
			validators: [loginValidators.required]
		},
		{
			key: 'password',
			value: credentials.password,
			validators: [loginValidators.required]
		}
	]);

	const loginHandler: FormEventHandler = event => {
		event.preventDefault();
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
				recordUpdate<Credentials>(credentials, updatedKey, updatedValue) as Credentials
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
		<Styled.LoginForm onSubmit={loginHandler}>
			<Styled.Inputs>
				<Input
					data-name='email'
					name='email'
					value={credentials.email}
					isValid={!touched.email || isInputValid('email')}
					onChange={onCredentialsChangeHandler}
					placeholder={touched.email ? 'email is required...' : 'email@example.com'}
					onBlur={onBlurHandler}
				/>
				<Input
					data-name='password'
					name='password'
					value={credentials.password}
					isValid={!touched.password || isInputValid('password')}
					onChange={onCredentialsChangeHandler}
					type='password'
					placeholder='password'
					onBlur={onBlurHandler}
					autoComplete='new-password'
				/>
			</Styled.Inputs>
			<Styled.Controls>
				<Button disabled={!isFormValid} variant='primary' width='25.2rem' type='submit'>
					SIGN_IN
				</Button>
				<Button variant='secondary' width='25.2rem' type='button'>
					SIGN_IN WITH GOOGLE
				</Button>
			</Styled.Controls>
		</Styled.LoginForm>
	);
};
