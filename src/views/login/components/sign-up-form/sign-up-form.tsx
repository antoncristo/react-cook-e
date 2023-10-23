import {
	type FormEventHandler,
	type ChangeEventHandler,
	type FocusEventHandler,
	useState
} from 'react';
import { Button, Input, Loader } from '@cooke/shared';
import { useValidation } from '@cooke/hooks';
import { recordUpdate } from '@cooke/utils';
import { useSignUp } from '@cooke/api/user';

import * as SignUpValidators from './validators';

import * as Styled from './sign-up-form.styled';

export const SignUpForm = ({ toggleForms }: { toggleForms: () => void }) => {
	const [credentials, setCredentials] = useState<ExtendedCredentials>({
		email: '',
		password: '',
		name: ''
	});

	const { signUpHandler, isSignUpPending } = useSignUp(toggleForms);

	const { isFormValid, isInputValid, markAsTouched, touched } =
		useValidation<ExtendedCredentials>([
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
		signUpHandler(credentials);
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
				recordUpdate<ExtendedCredentials>(
					credentials,
					updatedKey,
					updatedValue
				) as ExtendedCredentials
			);
		}
	};

	const onBlurHandler: FocusEventHandler<HTMLInputElement> = focusEvent => {
		const formKey = focusEvent.currentTarget.getAttribute(
			'data-name'
		)! as keyof ExtendedCredentials;

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
				{isSignUpPending ? (
					<div style={{ height: '3.5rem' }}>
						<Loader size='S' />
					</div>
				) : (
					<Button disabled={!isFormValid} variant='primary' width='25.2rem' type='submit'>
						CREATE
					</Button>
				)}
			</Styled.Controls>
		</Styled.SignUpForm>
	);
};
