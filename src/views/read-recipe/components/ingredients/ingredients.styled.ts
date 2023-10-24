import { Text } from '@cooke/shared';
import { styleUtils } from '@cooke/style';
import styled from 'styled-components';

export const Ingredients = styled.div`
	box-sizing: border-box;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: ${({ theme }) => theme.decorators.padding.default};
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
`;

export const IngredientsTitle = styled(Text)`
	color: rgba(${({ theme }) => theme.colors.primary}, 1);
	text-decoration: underline;
	${styleUtils.fontFamily(400)}
`;

export const IngredientsList = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

export const IngredientItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.6rem;
	border-bottom: 0.1rem dashed rgba(${({ theme }) => theme.colors.white}, 1);
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};

	& > span:nth-child(2) {
		color: rgba(${({ theme }) => theme.colors.white}, 1);
		${styleUtils.fontFamily(500)}
		font-size: 1.8rem;
	}
`;
