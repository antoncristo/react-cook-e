import { breakpoints } from '@cooke/style';
import styled from 'styled-components';

export const Dashboard = styled.div`
	height: 100%;
`;

export const RecipesFlex = styled.div`
	box-sizing: border-box;
	height: calc(100% - 6rem);
	margin-top: 2rem;
	padding: 0.6rem 0;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: wrap;
	gap: 2rem;
	overflow-y: auto;

	@media screen and (max-width: ${breakpoints.mobile.width}px) {
		flex-direction: column;
		flex-wrap: nowrap;
		padding: 0;
	}
`;
