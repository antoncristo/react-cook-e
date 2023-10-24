import { TextArea } from '@cooke/shared';
import styled from 'styled-components';

export const DishDescription = styled(TextArea)`
	box-sizing: border-box;
	background-color: rgba(${({ theme }) => theme.colors.secondary}, 0.6);
	width: 100%;
	min-height: 10rem;
	resize: vertical;
`;
