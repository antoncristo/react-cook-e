import { Button } from '@cooke/shared';
import styled from 'styled-components';

export const RecipesMatch = styled.div`
	box-sizing: border-box;
	position: absolute;
	z-index: 2;
	top: calc(100% + 1rem);
	width: 100%;
	border-radius: 0.6rem;
	background-color: rgba(${({ theme }) => theme.colors.secondary}, 1);
	padding: 0 0 1.6rem 0;
	border: 0.1rem solid rgba(${({ theme }) => theme.colors.orange}, 1);
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.secondary};
	min-height: 12rem;
`;

export const RecipesList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	max-height: 33.3rem;
	overflow-y: auto;
`;

export const MatchHeader = styled.header`
	box-sizing: border-box;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1.6rem;
	border-radius: 0.6rem 0.6rem 0 0;
	color: rgba(${({ theme }) => theme.colors.primary}, 1);
	font-family: 'cooke-500';
	text-decoration: underline;
	max-height: 4.5rem;
`;

export const HeaderButton = styled(Button)`
	border: none;
	padding: 0;
	width: 1.8rem;
	aspect-ratio: 1/1;
	background-color: transparent;
`;
