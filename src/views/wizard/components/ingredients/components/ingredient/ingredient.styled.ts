import { Button, Input } from '@cooke/shared';
import styled from 'styled-components';

export const Ingredient = styled.div`
	box-sizing: border-box;
	min-height: 6rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	gap: 1.6rem;

	border-radius: 0.6rem;
	padding: 0.8rem 1.2rem;
	background-color: rgba(${({ theme }) => theme.colors.secondary}, 0.6);
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};

	animation: appear 0.33s ease-in-out;

	&:focus-within {
		outline: 0.1rem solid rgba(${({ theme }) => theme.colors.primary});
	}

	@keyframes appear {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const IngredientInput = styled(Input)`
	padding: 0.6rem 1.2rem;
	font-size: 1.4rem;
`;

export const Controls = styled.div`
	margin-inline-start: auto;
	display: flex;
	gap: 1rem;
`;

export const ControlButton = styled(Button)`
	font-size: 1.4rem;
	width: 8rem;
	padding: 0.6rem 1.2rem;
`;
