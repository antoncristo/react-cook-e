import styled, { css } from 'styled-components';

export const Text = styled.p<{
	$maxWidth?: string;
	fontSize?: string;
	$numberOfLines?: number;
}>`
	box-sizing: border-box;
	margin: 0;
	width: 100%;
	${({ $numberOfLines, fontSize }) =>
		$numberOfLines && fontSize
			? css`
					min-height: calc(${fontSize} * (${$numberOfLines}*1.2));
			  `
			: css`
					min-height: 1.6rem;
			  `}
	max-width: ${({ $maxWidth }) => $maxWidth};
	font-size: ${({ fontSize }) => fontSize};
	line-height: 1.2;
	text-align: start;

	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: ${({ $numberOfLines }) => $numberOfLines};
	-webkit-box-orient: vertical;
`;
