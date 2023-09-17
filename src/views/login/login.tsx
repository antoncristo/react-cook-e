import { type FormEventHandler } from 'react';

import { CookeLogo, LoginForm } from './components';

import * as Styled from './login.styled';

export const Login = () => (
	<Styled.Login>
		<CookeLogo fontSize='6rem' />
		<LoginForm />
	</Styled.Login>
);
