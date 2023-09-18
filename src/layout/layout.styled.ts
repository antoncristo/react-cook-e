import styled from 'styled-components';

export const Layout = styled.div`
	box-sizing: border-box;
	height: 100vh;
	width: 100vw;
	background-color: rgba(${({ theme }) => theme.colors.secondary}, 0.9);
`;
