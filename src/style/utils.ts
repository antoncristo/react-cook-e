import { css } from 'styled-components';

export const buttonWithHoverInversion = (bg: string, c: string) =>
	css`
		background-color: ${bg};
		color: ${c};

		&:hover {
			background-color: ${c};
			color: ${bg};
		}
	`;
