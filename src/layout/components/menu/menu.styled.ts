import styled from 'styled-components';

export const Menu = styled.menu`
	box-sizing: border-box;
	min-width: 18rem;
	margin: 0;
	padding: ${({ theme }) => theme.decorators.padding.default} 0;
	background-color: rgba(${({ theme }) => theme.colors.black}, 0.8);
`;
