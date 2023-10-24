import { useState } from 'react';
import { BreakPointSwitch, CookeLogo } from '@cooke/shared';
import { breakpoints } from '@cooke/style';

import { LoginForm, SignUpForm } from './components';

import * as Styled from './login.styled';
import { useLogin, useSignUp } from '@cooke/api/user';

export const Login = () => {
	const [isLoginForm, setIsLoginForm] = useState(true);
	const { isLoginPending } = useLogin();
	const { isSignUpPending } = useSignUp(() => null);

	const goToLoginForm = () => {
		setIsLoginForm(true);
	};

	const goToSignUpForm = () => {
		setIsLoginForm(false);
	};

	return (
		<Styled.Login>
			<BreakPointSwitch
				before={<CookeLogo fontSize='5rem' iconDiameter={40} />}
				switchAt={`${breakpoints.mobile.width}px`}
				after={<CookeLogo fontSize='7rem' iconDiameter={60} />}
			/>
			{isLoginForm ? (
				<Styled.Appear key='lk'>
					<LoginForm />
				</Styled.Appear>
			) : (
				<Styled.Appear key='suk'>
					<SignUpForm toggleForms={goToLoginForm} />
				</Styled.Appear>
			)}
			<Styled.RegistrationToggle
				disabled={isLoginPending || isSignUpPending}
				key={isLoginForm ? 'login' : 'sign-up'}
				onClick={isLoginForm ? goToSignUpForm : goToLoginForm}
				variant='secondary'
			>
				<Styled.ToggleText
					text={isLoginForm ? 'Create new CooK-E account' : 'Already have an account?'}
				/>
			</Styled.RegistrationToggle>
		</Styled.Login>
	);
};
