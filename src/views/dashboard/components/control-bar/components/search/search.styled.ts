import { Input } from '@cooke/shared';
import { breakpoints } from '@cooke/style';
import styled from 'styled-components';

export const RelativeContainer = styled.div`
	position: relative;
	width: 100%;

	max-width: 46rem;

	@media screen and (max-width: ${breakpoints.mobile.width}px) {
		max-width: 100%;
		height: 4.6rem;
	}
`;

export const Search = styled(Input)`
	box-sizing: border-box;
	background-color: rgba(${({ theme }) => theme.colors.secondary}, 0.6);
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};
	font-size: 1.4rem;
	color: rgba(${({ theme }) => theme.colors.white}, 1);
	height: 3.8rem;
	width: 100%;

	@media screen and (max-width: ${breakpoints.mobile.width}px) {
		height: 4.6rem;
	}

	&::placeholder {
		color: rgba(${({ theme }) => theme.colors.white}, 0.9);
	}

	&::selection {
		color: rgba(${({ theme }) => theme.colors.black}, 1);
		background-color: rgba(${({ theme }) => theme.colors.white}, 1);
	}
`;
