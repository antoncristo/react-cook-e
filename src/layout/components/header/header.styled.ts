import styled from 'styled-components';

export const Header = styled.header`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(${({ theme }) => theme.colors.black}, 0.6);
	border-bottom: 0.1rem solid rgba(${({ theme }) => theme.colors.primary}, 1);
	padding: 0 2rem;

	@media print {
		display: none;
	}
`;

export const Section = styled.section<{
	$flex: number;
	$justify: 'center' | 'flex-end' | 'flex-start';
}>`
	flex: ${({ $flex }) => $flex};
	display: flex;
	justify-content: ${({ $justify }) => $justify};
`;
