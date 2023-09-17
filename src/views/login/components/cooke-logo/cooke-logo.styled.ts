import styled from 'styled-components';

export const CookeLogo = styled.div<{ $fontSize: string }>`
	font-size: ${({ $fontSize }) => $fontSize};
	color: rgba(${({ theme }) => theme.colors.primary}, 1);
	font-family: 'cooke-600';
	transition: all 0.2s ease-in-out;
	cursor: default;

	&:hover {
		color: rgba(${({ theme }) => theme.colors.ternary}, 1);
		text-shadow: 0.3rem 0.3rem 0.6rem rgba(${({ theme }) => theme.colors.black}, 1);
	}
`;
