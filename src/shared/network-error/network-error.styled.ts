import styled from 'styled-components';

export const NetworkError = styled.div`
	box-sizing: border-box;
	border: 0.2rem dashed rgba(${({ theme }) => theme.colors.error}, 1);
	width: 100%;
	max-width: 46rem;
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};
	border-radius: 1.3rem;
`;

export const ErrorMessage = styled.p`
	text-align: center;
	color: rgba(${({ theme }) => theme.colors.ternary}, 1);
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
	white-space: pre-line;
	font-size: 1.6rem;
	text-decoration: underline;
`;
