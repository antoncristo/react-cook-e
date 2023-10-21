import { breakpoints, styleUtils } from '@cooke/style';
import styled from 'styled-components';

export const RecipeCard = styled.div`
	position: relative;
	box-sizing: border-box;
	border: 0.1rem solid transparent;
	width: 22rem;
	aspect-ratio: 3/4;
	border-radius: 1.2rem;
	background-color: rgba(${({ theme }) => theme.colors.black}, 0.6);
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};
	padding: 1.6rem;
	transition: all 0.32s ease-in-out;

	&:hover,
	&:focus-within {
		transform: skew(2deg, 2deg) rotateY(3deg);
		border-left: 0.1rem solid rgba(${({ theme }) => theme.colors.ternary}, 1);

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
	color: rgba(${({ theme }) => theme.colors.ternary});
	${styleUtils.fontFamily(500)}
	border-bottom: 0.2rem dashed rgba(${({ theme }) => theme.colors.primary});
	height: calc(1.8rem * 2.4);
	margin-bottom: 1.6rem;
`;

export const Stats = styled.div`
	font-size: 1.4rem;
	margin-bottom: 1.6rem;

	span {
		${styleUtils.fontFamily(600)}
		color: rgba(${({ theme }) => theme.colors.ternary});
		font-size: 1.6rem;
	}
`;

export const RecipeDescription = styled.div`
	padding-top: 0.6rem;
	border-top: 0.2rem dashed rgba(${({ theme }) => theme.colors.primary});
	${styleUtils.fontFamily(200)}
`;
