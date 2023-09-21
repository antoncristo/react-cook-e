import styled from 'styled-components';

export const Text = styled.p<{
	$maxWidth?: string;
	fontSize?: string;
	$numberOfLines?: number;
}>`
	box-sizing: border-box;
	margin: 0;
	width: 100%;
	max-width: ${({ $maxWidth }) => $maxWidth};
	font-size: ${({ fontSize }) => fontSize};
	line-height: 1.2;
	text-align: start;

	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: ${({ $numberOfLines }) => $numberOfLines};
	-webkit-box-orient: vertical;
`;
