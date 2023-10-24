import styled from 'styled-components';

export const Wizard = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: flex-start;
	justify-content: center;
	overflow-y: auto;
	padding-top: 2rem;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const WizardFlex = styled.div`
	box-sizing: border-box;
	width: 100%;
	max-width: 99rem;
	padding-inline-end: 1rem;
	padding-inline-start: 1rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 2rem;
	padding-bottom: 2rem;
`;
