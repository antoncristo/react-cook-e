import { Button, Text } from '@cooke/shared';
import styled from 'styled-components';

export const Login = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2.2rem;
	height: 100%;
`;

export const RegistrationToggle = styled(Button)`
	width: 30rem;
`;

export const ToggleText = styled(Text)`
	text-align: center;
	font-size: 1.4rem;
	font-style: italic;
	border-bottom: 0.1rem solid white;
	line-height: 1.9rem;
`;

export const Appear = styled.div`
	animation: appear 0.6s ease-in-out;

	@keyframes appear {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
