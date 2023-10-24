import { Text } from '@cooke/shared';
import { styleUtils } from '@cooke/style';
import styled from 'styled-components';

export const Steps = styled.div`
	box-sizing: border-box;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: ${({ theme }) => theme.decorators.padding.default};
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
`;

export const StepsTitle = styled(Text)`
	color: rgba(${({ theme }) => theme.colors.primary}, 1);
	text-decoration: underline;
	${styleUtils.fontFamily(400)}
`;

export const StepsList = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

export const StepsItem = styled.li`
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	flex-direction: column;
	font-size: 1.6rem;
	border-bottom: 0.1rem dashed rgba(${({ theme }) => theme.colors.white}, 1);
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};

	p {
		margin: 0;
	}

	div {
		text-decoration: underline;
		color: rgba(${({ theme }) => theme.colors.white}, 1);
		${styleUtils.fontFamily(500)}
	}
`;
