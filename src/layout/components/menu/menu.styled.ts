import styled from 'styled-components';

export const Menu = styled.menu`
	box-sizing: border-box;
	width: 18rem;
	margin: 0;
	padding: ${({ theme }) => theme.decorators.padding.default};
	background-color: rgba(${({ theme }) => theme.colors.black}, 0.8);
`;
