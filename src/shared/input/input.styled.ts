import styled, { css } from 'styled-components';

export const Input = styled.input<{ width?: string; $isValid: boolean }>`
	padding: 0;
	margin: 0;
	border: none;
	border-radius: 0.6rem;
	padding: 0.8rem 1.6rem;
	font-size: 1.6rem;
	width: ${({ width }) => width ?? '22rem'};

	${({ $isValid }) =>
		$isValid
			? css`
					color: rgba(${({ theme }) => theme.colors.primary}, 1);
					box-shadow: ${({ theme }) => theme.decorators.boxShadow.secondary};

					&::placeholder {
						color: rgba(${({ theme }) => theme.colors.grey}, 1);
					}
			  `
			: css`
					color: rgba(${({ theme }) => theme.colors.error}, 1);
					box-shadow: ${({ theme }) => `inset ${theme.decorators.boxShadow.error}`};
					outline-color: rgba(${({ theme }) => theme.colors.error}, 1);

					&::placeholder {
						color: rgba(${({ theme }) => theme.colors.white}, 1);
					}
			  `}
`;
