import { Input } from '@cooke/shared';
import { breakpoints } from '@cooke/style';
import styled from 'styled-components';

export const Search = styled(Input)`
	box-sizing: border-box;
	background-color: rgba(${({ theme }) => theme.colors.secondary}, 0.6);
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};
	font-size: 1.4rem;
	color: rgba(${({ theme }) => theme.colors.white}, 1);
	width: 100%;
	max-width: 46rem;
	margin-bottom: 2rem;

	&::placeholder {
		color: rgba(${({ theme }) => theme.colors.ternary}, 0.9);
	}

	&::selection {
		color: rgba(${({ theme }) => theme.colors.black}, 1);
		background-color: rgba(${({ theme }) => theme.colors.ternary}, 1);
	}

	@media screen and (max-width: ${breakpoints.mobile.width}px) {
		max-width: unset;
	}
`;
