import styled from 'styled-components';

const HEADER_HEIGHT = '6rem';

export const Layout = styled.div`
	box-sizing: border-box;
	height: 100vh;
	width: 100vw;
	background-color: rgba(${({ theme }) => theme.colors.secondary}, 0.9);
	color: rgba(${({ theme }) => theme.colors.white}, 1);
`;

export const Children = styled.div`
	header {
		height: ${HEADER_HEIGHT};
	}
`;

export const Body = styled.div`
	box-sizing: border-box;
	height: calc(100vh - ${HEADER_HEIGHT});
	display: flex;
`;

export const AppOutlet = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: calc(100vh - ${HEADER_HEIGHT});
	padding: ${({ theme }) => theme.decorators.padding.default};
`;
