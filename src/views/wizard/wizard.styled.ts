import { Input, TextArea } from '@cooke/shared';
import styled from 'styled-components';

export const Wizard = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

export const WizardFlex = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	max-width: 99rem;
	padding-inline-end: 1rem;
	padding-inline-start: 1rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 2rem;
	overflow-y: auto;

	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const WizardTitle = styled.h1`
	font-family: 'cooke-600';
	font-size: 3rem;
	color: rgba(${({ theme }) => theme.colors.primary}, 1);
	text-shadow: ${({ theme }) => theme.decorators.textShadow.primary};
	border-bottom: 0.1rem dashed rgba(${({ theme }) => theme.colors.ternary}, 1);
	margin: 0;
`;

export const WizardTitleInput = styled(Input)`
	box-sizing: border-box;
	background-color: rgba(${({ theme }) => theme.colors.secondary}, 0.6);
	color: rgba(${({ theme }) => theme.colors.white}, 1);
	width: 100%;

	&::placeholder {
		color: rgba(${({ theme }) => theme.colors.ternary}, 0.9);
	}
`;

export const WIzardDescriptionInput = styled(TextArea)`
	box-sizing: border-box;
	background-color: rgba(${({ theme }) => theme.colors.secondary}, 0.6);
	color: rgba(${({ theme }) => theme.colors.white}, 1);
	width: 100%;
	min-height: 10rem;
	resize: vertical;

	&::placeholder {
		color: rgba(${({ theme }) => theme.colors.ternary}, 0.9);
	}
`;
