import { Text } from '@cooke/shared';
import { styleUtils } from '@cooke/style';
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

	@media print {
		overflow: visible;

		* {
			text-shadow: none;
		}

		& > .control {
			visibility: hidden;
		}
	}
`;

export const RecipeTitle = styled(Text)`
	${styleUtils.fontFamily(600)}
	color: rgba(${({ theme }) => theme.colors.primary}, 1);
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
	border-bottom: 0.1rem dashed rgba(${({ theme }) => theme.colors.ternary}, 1);

	@media print {
		text-shadow: none;
	}
`;

export const RecipeDescription = styled.p`
	padding-left: 1.6rem;
	border-left: 0.2rem solid rgba(${({ theme }) => theme.colors.ternary}, 1);
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
	font-size: 1.6rem;

	@media print {
		text-shadow: none;
	}
`;

export const RecipeFooter = styled.div`
	color: rgba(${({ theme }) => theme.colors.white});
	font-style: italic;
	font-size: 3rem;
	${styleUtils.fontFamily(700)}
`;
