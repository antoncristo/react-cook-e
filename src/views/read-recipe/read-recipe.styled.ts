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
	width: 100%;
	height: 100%;
	overflow-y: auto;
	max-width: 99rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 2rem;
`;

export const RecipeTitle = styled(Text)`
	font-family: 'cooke-600';
	border-bottom: 0.1rem dashed rgba(${({ theme }) => theme.colors.ternary}, 1);
`;

export const RecipeDescription = styled(Text)`
	padding-left: 1.6rem;
	border-left: 0.2rem solid rgba(${({ theme }) => theme.colors.ternary}, 1);
`;
