import { styleUtils } from '@cooke/style';
import styled from 'styled-components';

export const CookeLogo = styled.div<{ $fontSize: string }>`
	font-size: ${({ $fontSize }) => $fontSize};
	line-height: 1;
	${styleUtils.fontFamily(600)}
	color: rgba(${({ theme }) => theme.colors.white}, 1);
	text-shadow: 0.3rem 0.3rem 0.6rem rgba(${({ theme }) => theme.colors.black}, 1);
	transition: all 0.2s ease-in-out;
	display: flex;
	align-items: center;
	min-width: fit-content;
	word-break: keep-all;

	cursor: default;

	&:hover {
		color: rgba(${({ theme }) => theme.colors.primary}, 1);
	}
`;
