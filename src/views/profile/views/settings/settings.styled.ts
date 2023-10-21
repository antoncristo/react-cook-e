import styled from 'styled-components';
import { Text } from '@cooke/shared';

export const Settings = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const SettingsSectionTitle = styled(Text)`
	color: rgba(${({ theme }) => theme.colors.ternary});
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
	font-size: 1.6rem;
	margin-bottom: 1rem;
	border-bottom: 0.1rem dashed rgba(${({ theme }) => theme.colors.ternary});
`;
