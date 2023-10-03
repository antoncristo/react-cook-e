import styled from 'styled-components';

export const Header = styled.header`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(${({ theme }) => theme.colors.black}, 0.6);
	border-bottom: 0.1rem solid rgba(${({ theme }) => theme.colors.black}, 1);
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};

	@media print {
		display: none;
	}
`;
