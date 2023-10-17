import styled from 'styled-components';

export const Popover = styled.div`
	box-sizing: border-box;
	position: fixed;
	z-index: 1;
	background-color: rgba(${({ theme }) => theme.colors.secondary}, 1);
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};
	padding: ${({ theme }) => theme.decorators.padding.default};
	border-radius: 0.6rem;
	cursor: default;
`;
