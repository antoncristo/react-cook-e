import styled, { css } from 'styled-components';

export const TextArea = styled.textarea<{ width?: string; $isValid: boolean }>`
	margin: 0;
	border: none;
	border-radius: 0.6rem;
	padding: 0.8rem 1.6rem;
	font-size: 1.6rem;
	width: ${({ width }) => width ?? '22rem'};
	color: rgba(${({ theme }) => theme.colors.white}, 1);
	border: 0.1rem solid rgba(${({ theme }) => theme.colors.white}, 1);

	${({ $isValid }) =>
		$isValid
			? css`
					box-shadow: ${({ theme }) => theme.decorators.boxShadow.secondary};

					&::placeholder {
						color: rgba(${({ theme }) => theme.colors.grey}, 1);
					}
			  `
			: css`
					box-shadow: ${({ theme }) => `inset ${theme.decorators.boxShadow.error}`};
					outline-color: rgba(${({ theme }) => theme.colors.error}, 1);
					border: 0.1rem solid rgba(${({ theme }) => theme.colors.error}, 1);
			  `}
`;
