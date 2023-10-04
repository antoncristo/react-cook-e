import { BreakPointSwitch, CookeLogo } from '@cooke/shared';
import { breakpoints } from '@cooke/style';

import { LoginForm } from './components';

import * as Styled from './login.styled';

export const Login = () => (
	<Styled.Login>
		<BreakPointSwitch
			before={<CookeLogo fontSize='5rem' iconDiameter={40} />}
			switchAt={`${breakpoints.mobile.width}px`}
			after={<CookeLogo fontSize='7rem' iconDiameter={60} />}
		/>
		<LoginForm />
	</Styled.Login>
);
