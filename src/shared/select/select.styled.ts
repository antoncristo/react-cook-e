import styled from 'styled-components';

export const Select = styled.select`
	background-color: transparent;
	color: rgba(${({ theme }) => theme.colors.white});
	padding: 0.6rem 1.2rem;
	border: 0.1rem solid rgba(${({ theme }) => theme.colors.white});
	border-radius: 1rem;

	&:focus {
		border: 0.1rem solid transparent;
	}
`;
