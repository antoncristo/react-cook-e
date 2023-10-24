import { Text } from '@cooke/shared';
import { styleUtils } from '@cooke/style';
import styled from 'styled-components';

export const ProfileIntro = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1.6rem;
`;

export const UserInfoText = styled(Text)<{ $fontWeight: 'bold' | 'normal' }>`
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
	${({ $fontWeight }) =>
		$fontWeight === 'bold' ? styleUtils.fontFamily(600) : styleUtils.fontFamily(400)}
`;

export const Controls = styled.div`
	display: flex;
	gap: 1.6rem;
`;

export const ProfileButton = styled.button`
	border: 0.1rem solid rgba(${({ theme }) => theme.colors.white}, 1);
	background-color: transparent;
	padding: 0.6rem;
	border-radius: 0.6rem;
	cursor: pointer;
	height: fit-content;
`;
