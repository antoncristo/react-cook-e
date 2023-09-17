import styled from 'styled-components';

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3.2rem;

	padding: 2.2rem;
	border-radius: 1.6rem;
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};

	&:focus-within {
		box-shadow: 0.1rem 0.1rem 2rem 0.6rem
			rgba(${({ theme }) => theme.colors.primary}, 0.6);
	}
`;

export const Inputs = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

export const Controls = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;
