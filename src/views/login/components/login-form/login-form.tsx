import { useState, type FormEventHandler, type ChangeEventHandler } from 'react';
import { recordUpdate } from 'utils';

import * as Styled from './login-form.styled';

export const LoginForm = () => {
	const [credentials, setCredentials] = useState<Credentials>({
		email: '',
		password: ''
	});

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

		if (updatedKey && updatedValue) {
			setCredentials(recordUpdate<Credentials>(credentials, updatedKey, updatedValue));
		}
	};

	return (
		<Styled.LoginForm onSubmit={loginHandler}>
			<input
				data-name='email'
				value={credentials.email}
				onChange={onCredentialsChangeHandler}
				placeholder='email'
			/>
			<input
				data-name='password'
				value={credentials.password}
				onChange={onCredentialsChangeHandler}
				type='password'
				placeholder='password'
			/>
			<button type='submit'>SIGN_IN</button>
			<button type='button'>SIGN_IN WITH GOOGLE</button>
		</Styled.LoginForm>
	);
};
