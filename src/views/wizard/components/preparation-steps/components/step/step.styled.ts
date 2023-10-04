import { Button, TextArea } from '@cooke/shared';
import { breakpoints } from '@cooke/style';
import styled from 'styled-components';

export const Step = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: ${breakpoints.mobile.width}px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
	}
`;

export const Controls = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	@media screen and (max-width: ${breakpoints.mobile.width}px) {
		width: 100%;

		& > button:nth-child(3) {
			margin-inline-start: auto;
		}
	}
`;

export const StepCount = styled.h2`
	margin: 0;
	color: rgba(${({ theme }) => theme.colors.white});
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
	font-size: 1.6rem;
`;

export const ControlButton = styled(Button)`
	font-size: 1.4rem;
	width: 8rem;
	padding: 0.6rem 1.2rem;
`;

export const DescriptionInput = styled(TextArea)`
	box-sizing: border-box;
	background-color: rgba(${({ theme }) => theme.colors.secondary}, 0.6);
	color: rgba(${({ theme }) => theme.colors.white}, 1);
	width: 100%;
	min-height: 10rem;
	resize: vertical;
`;
