import { Input } from '@cooke/shared';
import styled from 'styled-components';

export const DishNameInput = styled(Input)`
	box-sizing: border-box;
	background-color: rgba(${({ theme }) => theme.colors.secondary}, 0.6);
	color: rgba(${({ theme }) => theme.colors.white}, 1);
	width: 100%;
`;
