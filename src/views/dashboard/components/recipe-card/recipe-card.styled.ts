import { breakpoints, styleUtils } from '@cooke/style';
import styled from 'styled-components';

export const RecipeCard = styled.div`
	position: relative;
	box-sizing: border-box;
	border: 0.1rem solid rgba(${({ theme }) => theme.colors.secondary});
	width: 22rem;
	border-radius: 1.2rem;
	background-color: rgba(${({ theme }) => theme.colors.primary});
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.secondary};
	transition: all 0.32s ease-in-out;

	&:hover,
	&:focus-within {
		> .mask {
			display: flex;
		}
	}

	@media screen and (max-width: ${breakpoints.mobile.width}px) {
		width: 100%;
		aspect-ratio: unset;
	}
`;

export const RecipeTitle = styled.div`
	box-sizing: border-box;
	color: rgba(${({ theme }) => theme.colors.secondary});
	${styleUtils.fontFamily(500)}
	height: calc(2.5rem * 2.4);
	padding: 1rem;
	background-color: rgba(${({ theme }) => theme.colors.primary});
	border-radius: 1.1rem 1.1rem 0 0;
`;

export const Stats = styled.div`
	background-color: rgba(${({ theme }) => theme.colors.secondary});
	padding: 1rem;
	font-size: 1.4rem;
	text-decoration: underline;

	span {
		${styleUtils.fontFamily(600)}
		color: rgba(${({ theme }) => theme.colors.white});
		font-size: 1.4rem;
	}
`;

export const RecipeDescription = styled.div`
	padding: 1rem;
	${styleUtils.fontFamily(300)}
	color: black;
`;
