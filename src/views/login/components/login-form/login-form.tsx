import { type FormEventHandler } from 'react';

import * as Styled from './login-form.styled';

interface LoginFormProps {
	submitHandler: FormEventHandler;
}

export const LoginForm = (props: LoginFormProps) => {
	const { submitHandler } = props;

	return (
		<Styled.LoginForm onSubmit={submitHandler}>
			<input placeholder='email' />
			<input placeholder='password' />
			<button type='submit'>SIGN_IN</button>
			<button type='button'>SIGN_IN WITH GOOGLE</button>
		</Styled.LoginForm>
	);
};
