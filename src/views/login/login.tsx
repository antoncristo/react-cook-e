import { type FormEventHandler } from 'react';

import { CookeLogo, LoginForm } from './components';

import * as Styled from './login.styled';

export const Login = () => {
	const loginHandler: FormEventHandler = event => {
		event.preventDefault();
	};

	return (
		<Styled.Login>
			<CookeLogo fontSize='6rem' />
			<LoginForm submitHandler={loginHandler} />
		</Styled.Login>
	);
};
