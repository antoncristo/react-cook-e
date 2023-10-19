import styled from 'styled-components';

export const ErrorPage = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const ErrorMessage = styled.p`
	text-align: center;
	color: rgba(${({ theme }) => theme.colors.ternary}, 1);
	white-space: pre-line;
	font-size: 1.6rem;
	padding: ${({ theme }) => theme.decorators.padding.default};
`;
