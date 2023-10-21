import { Text } from '@cooke/shared';
import { styleUtils } from '@cooke/style';
import styled from 'styled-components';

export const NotFound = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const FourOFour = styled(Text)`
	color: rgba(${({ theme }) => theme.colors.purple}, 1);
	${styleUtils.fontFamily(800)}
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
`;
