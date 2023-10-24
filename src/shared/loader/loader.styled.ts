import styled, { css } from 'styled-components';

export const Loader = styled.div<{ size: 'S' | 'M' | 'L' }>`
	.loader {
		width: ${({ size }) => {
			if (size === 'S') {
				return '2rem';
			}

			if (size === 'M') {
				return '3rem';
			}

			if (size === 'L') {
				return '4rem';
			}
		}};
		aspect-ratio: 1/1;
		border-radius: 50%;
		display: inline-block;
		border-top: 4px solid rgba(${({ theme }) => theme.colors.primary}, 1);
		border-right: 4px solid transparent;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
	}

	.loader::after {
		content: '';
		box-sizing: border-box;
		position: absolute;
		left: 0;
		top: 0;
		width: ${({ size }) => {
			if (size === 'S') {
				return '2rem';
			}

			if (size === 'M') {
				return '3rem';
			}

			if (size === 'L') {
				return '4rem';
			}
		}};
		aspect-ratio: 1/1;
		border-radius: 50%;
		border-left: 4px solid rgba(${({ theme }) => theme.colors.purple}, 1);
		border-bottom: 4px solid transparent;
		animation: rotation 0.5s linear infinite reverse;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
