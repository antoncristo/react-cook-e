import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RecipeCard = styled(Link)`
	box-sizing: border-box;
	border: 0.1rem solid transparent;
	width: 22rem;
	aspect-ratio: 3/4;
	border-radius: 1.2rem;
	background-color: rgba(${({ theme }) => theme.colors.black}, 0.6);
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};
	padding: 1.6rem;
	transition: all 0.32s ease-in-out;

	text-decoration: none;
	color: unset;

	&:hover,
	&:focus {
		transform: skew(2deg, 2deg) rotateY(3deg);
		border-left: 0.1rem solid rgba(${({ theme }) => theme.colors.ternary}, 1);
		cursor: pointer;
	}
`;

export const RecipeTitle = styled.div`
	color: rgba(${({ theme }) => theme.colors.ternary});
	font-family: 'cooke-500';
	border-right: 0.2rem solid rgba(${({ theme }) => theme.colors.primary});
	border-bottom: 0.2rem solid rgba(${({ theme }) => theme.colors.primary});
	border-radius: 0 0 0.6rem 0;
	height: calc(1.8rem * 2.4);
	margin-bottom: 1.6rem;
`;

export const Stats = styled.div`
	font-size: 1.4rem;
	margin-bottom: 1.6rem;

	span {
		font-family: 'cooke-600';
		color: rgba(${({ theme }) => theme.colors.ternary});
		font-size: 1.6rem;
	}
`;

export const RecipeDescription = styled.div`
	padding-top: 0.6rem;
	border-right: 0.1rem solid rgba(${({ theme }) => theme.colors.primary});
	border-top: 0.1rem solid rgba(${({ theme }) => theme.colors.primary});
	border-radius: 0 0.6rem 0 0;
	font-family: 'cooke-100';
`;
