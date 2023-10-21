import styled from 'styled-components';
import { Text } from '@cooke/shared';

export const Settings = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const SettingHeader = styled.div`
	height: 3rem;
	margin-bottom: 1rem;
	border-bottom: 0.1rem dashed rgba(${({ theme }) => theme.colors.ternary});
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const SectionTitle = styled(Text)`
	color: rgba(${({ theme }) => theme.colors.ternary});
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
	font-size: 1.6rem;
	font-weight: bold;
`;
