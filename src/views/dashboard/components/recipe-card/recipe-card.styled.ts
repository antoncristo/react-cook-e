import { breakpoints, styleUtils } from '@cooke/style';
import styled from 'styled-components';

export const RecipeCard = styled.div`
	position: relative;
	box-sizing: border-box;
	border: 0.1rem solid transparent;
	width: 22rem;
	border-radius: 1.2rem;
	background-color: rgba(${({ theme }) => theme.colors.black}, 0.6);
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.secondary};
	transition: all 0.32s ease-in-out;

	&:hover,
	&:focus-within {
		border-left: 0.1rem solid rgba(${({ theme }) => theme.colors.white}, 1);

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
	color: rgba(${({ theme }) => theme.colors.white});
	${styleUtils.fontFamily(500)}
	height: calc(2.5rem * 2.4);
	padding: 1rem;
	margin-bottom: 1.2rem;
	background-color: rgba(${({ theme }) => theme.colors.black}, 0.6);
	border-radius: 0.6rem 0.6rem 0 0;
`;

export const Stats = styled.div`
	background-color: rgba(${({ theme }) => theme.colors.black}, 0.8);
	padding: 1rem;
	font-size: 1.4rem;
	margin-bottom: 1.6rem;
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
`;
