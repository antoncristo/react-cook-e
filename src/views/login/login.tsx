import { BreakPointSwitch, CookeLogo } from '@cooke/shared';

import { LoginForm } from './components';

import * as Styled from './login.styled';

export const Login = () => (
	<Styled.Login>
		<BreakPointSwitch
			before={<CookeLogo fontSize='5rem' iconDiameter={40} />}
			switchAt='768px'
			after={<CookeLogo fontSize='7rem' iconDiameter={60} />}
		/>
		<LoginForm />
	</Styled.Login>
);
