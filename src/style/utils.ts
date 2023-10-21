import { css } from 'styled-components';

export const buttonWithHoverInversion = (bg: string, c: string) =>
	css`
		background-color: ${bg};
		color: ${c};

		&:focus,
		&:hover {
			background-color: ${c};
			color: ${bg};
		}
	`;

export const fontFamily = (weight: 100 | 200 | 300 | 400 | 500 | 700 | 800 | 900) =>
	css`
		font-family: 'cooke-${weight}', 'pt-${weight >= 400 ? 'bold' : 'regular'}';
	`;
