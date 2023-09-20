import { Button, CookeLogo } from '@cooke/shared';
import * as Styled from './error-page.styled';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
	const navigate = useNavigate();

	const goToLoginPageHandler = () => {
		// Fix: add a ref to the navigation url, in case a redirection needed after a login
		navigate('/login');
	};

	return (
		<Styled.ErrorPage>
			<CookeLogo fontSize='8rem' />
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
