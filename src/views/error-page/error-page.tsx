import { useNavigate } from 'react-router-dom';
import { BreakPointSwitch, Button, CookeLogo } from '@cooke/shared';
import { cookePathnames } from '@cooke/router';
import { breakpoints } from '@cooke/style';

import * as Styled from './error-page.styled';

export const ErrorPage = () => {
	const navigate = useNavigate();

	const goToLoginPageHandler = () => {
		// Fix: add a ref to the navigation url, in case a redirection needed after a login
		navigate(cookePathnames.unauthenticatedPathNames.LOGIN);
	};

	return (
		<Styled.ErrorPage>
			<BreakPointSwitch
				before={<CookeLogo fontSize='5rem' iconDiameter={40} />}
				switchAt={`${breakpoints.mobile.width}px`}
				after={<CookeLogo fontSize='8rem' iconDiameter={70} />}
			/>
			<Styled.ErrorMessage>
				{`The requested URL was not found! 
      Check if it is a correct one. If it is, please login :)`}
			</Styled.ErrorMessage>
			<Button onClick={goToLoginPageHandler} width='18rem'>
				go to login page
			</Button>
		</Styled.ErrorPage>
	);
};
