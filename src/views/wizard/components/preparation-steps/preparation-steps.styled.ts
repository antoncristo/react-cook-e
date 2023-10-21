import { Button } from '@cooke/shared';
import { styleUtils } from '@cooke/style';
import styled from 'styled-components';

export const PreparationSteps = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	border-bottom: 0.1rem dashed rgba(${({ theme }) => theme.colors.ternary}, 1);
	padding-bottom: 2rem;
`;

export const PreparationStepsTitle = styled.h2`
	width: fit-content;
	margin: 0;
	color: rgba(${({ theme }) => theme.colors.ternary}, 1);
	${styleUtils.fontFamily(400)}
	font-size: 1.6rem;
	border-bottom: 0.1rem dashed rgba(${({ theme }) => theme.colors.ternary}, 1);
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	justify-content: flex-start;
`;

export const ControlButton = styled(Button)`
	font-size: 1.4rem;
	width: 8rem;
	padding: 0.6rem 1.2rem;
`;
