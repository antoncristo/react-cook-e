import styled from 'styled-components';

export const Alert = styled.div`
	position: fixed;
	z-index: 1;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	backdrop-filter: grayscale(80%) blur(0.3rem);
	display: flex;
	align-items: center;
	justify-content: center;
	overflow-y: auto;
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 36rem;
	aspect-ratio: 4/3;
	background-color: rgba(${({ theme }) => theme.colors.secondary}, 1);
	border-radius: 1.6rem;
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};
	border: 0.1rem dashed rgba(${({ theme }) => theme.colors.primary}, 1);
	animation: appear 300ms ease-in;

	@keyframes appear {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const Message = styled.p`
	box-sizing: border-box;
	padding: 1.6rem;
	margin: 0;
	flex: 6;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	font-size: 1.4rem;
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
	overflow-y: auto;
`;

export const Controls = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
