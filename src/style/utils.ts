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
