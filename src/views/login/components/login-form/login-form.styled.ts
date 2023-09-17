import styled from 'styled-components';

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 2.2rem;
	border-radius: 0.6rem;
	background-color: rgba(${({ theme }) => theme.colors.white}, 1);
	box-shadow: ${({ theme }) => theme.decorators.boxShadow};
`;
