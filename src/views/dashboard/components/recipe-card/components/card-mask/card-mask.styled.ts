import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { styleUtils } from '@cooke/style';
import { Button } from '@cooke/shared';

export const CardMask = styled.div`
	z-index: 1;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 0 1rem;
	display: none;
	background-color: rgba(${({ theme }) => theme.colors.primary}, 0.9);
	border-radius: 1.2rem;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 1.6rem;
	animation: slide-in 200ms ease-in-out;

	@keyframes slide-in {
		0% {
			bottom: 100%;
			left: 100%;
		}
		100% {
			bottom: 0;
			left: 0;
		}
	}
`;

export const LinkButton = styled(Link)`
	box-sizing: border-box;
	text-decoration: none;
	color: unset;
	padding: 0.8rem 1.2rem;
	width: 98%;
	border-radius: 0.8rem;
	font-size: 1.4rem;
	${styleUtils.fontFamily(500)}
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};
	display: flex;
	align-items: center;

	${({ theme }) =>
		styleUtils.buttonWithHoverInversion(
			`rgba(${theme.colors.secondary}, 1)`,
			`rgba(${theme.colors.primary}, 1)`
		)}
`;

export const CardButton = styled(Button)`
	box-sizing: border-box;
	padding: 0.8rem 1.2rem;
	width: 98%;
	border-radius: 0.8rem;
	font-size: 1.4rem;
	${styleUtils.fontFamily(500)}
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};

	${({ theme }) =>
		styleUtils.buttonWithHoverInversion(
			`rgba(${theme.colors.secondary}, 1)`,
			`rgba(${theme.colors.primary}, 1)`
		)}
`;
