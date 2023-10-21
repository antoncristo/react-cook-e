import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as styleUtils from '@cooke/style/utils';

export const InitialState = styled.div`
	box-sizing: border-box;
	width: 100%;
	max-width: 46rem;
	border-radius: 1.2rem;
	padding: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	border: 0.1rem dashed rgba(${({ theme }) => theme.colors.ternary}, 1);
`;

export const LinkButton = styled(Link)`
	box-sizing: border-box;
	text-decoration: none;
	color: unset;
	padding: 0.8rem 1.2rem;
	width: 98%;
	border-radius: 0.8rem;
	font-size: 1.8rem;
	${styleUtils.fontFamily(500)}
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};
	text-align: center;

	${({ theme }) =>
		styleUtils.buttonWithHoverInversion(
			`rgba(${theme.colors.ternary}, 1)`,
			`rgba(${theme.colors.black}, 1)`
		)}
`;
