import styled, { css } from 'styled-components';
import { styleUtils } from '@cooke/style';

import { type ButtonVariant } from './button.types';

export const Button = styled.button.attrs(props => ({
	disabled: props.disabled
}))<{
	$variant?: ButtonVariant;
	width: string;
}>`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.8rem 1.2rem;
	border-radius: 0.6rem;
	border: 0.1rem solid rgba(${({ theme }) => theme.colors.primary}, 1);
	width: ${({ width }) => width ?? 'fit-content'};
	height: fit-content;
	font-size: 1.6rem;
	line-height: 1.2;
	cursor: pointer;

	${({ $variant, theme, disabled }) => {
		if (disabled) {
			return css`
				background-color: rgba(${theme.colors.grey}, 1);
				color: rgba(${theme.colors.secondary}, 1);
				opacity: 0.6;
				pointer-events: none;
				border: none;
			`;
		}

		if ($variant === 'primary') {
			return styleUtils.buttonWithHoverInversion(
				`rgba(${theme.colors.primary}, 1)`,
				`rgba(${theme.colors.secondary}, 1)`
			);
		}

		if ($variant === 'secondary') {
			return styleUtils.buttonWithHoverInversion(
				`rgba(${theme.colors.secondary}, 1)`,
				`rgba(${theme.colors.primary}, 1)`
			);
		}
	}}
`;
