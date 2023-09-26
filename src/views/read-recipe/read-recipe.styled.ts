import { Text } from '@cooke/shared';
import styled from 'styled-components';

export const ReadRecipe = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

export const RecipeFlex = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	max-width: 99rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 2rem;
	overflow-y: auto;

	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const RecipeTitle = styled(Text)`
	font-family: 'cooke-600';
	color: rgba(${({ theme }) => theme.colors.primary}, 1);
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
	border-bottom: 0.1rem dashed rgba(${({ theme }) => theme.colors.ternary}, 1);
`;

export const RecipeDescription = styled(Text)`
	padding-left: 1.6rem;
	border-left: 0.2rem solid rgba(${({ theme }) => theme.colors.ternary}, 1);
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
`;

export const RecipeFooter = styled.div`
	color: rgba(${({ theme }) => theme.colors.secondary});
	text-shadow: 0.2rem 0.2rem 0.6rem rgba(${({ theme }) => theme.colors.ternary}, 1);
	font-size: 3rem;
	font-family: 'cooke-600';
`;
