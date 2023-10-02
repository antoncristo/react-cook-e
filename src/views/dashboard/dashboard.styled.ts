import styled from 'styled-components';

export const Dashboard = styled.div`
	height: 100%;
`;

export const RecipesFlex = styled.div`
	box-sizing: border-box;
	height: calc(100% - 3rem);
	padding: ${({ theme }) => theme.decorators.padding.default};
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 2rem;
	overflow-y: auto;
`;
