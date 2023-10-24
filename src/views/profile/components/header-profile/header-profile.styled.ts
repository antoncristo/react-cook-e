import { styleUtils } from '@cooke/style';
import styled from 'styled-components';

export const HeaderProfile = styled.div``;

export const ProfileButton = styled.button`
	border: 0.1rem solid rgba(${({ theme }) => theme.colors.white}, 1);
	background-color: transparent;
	padding: 0.6rem;
	border-radius: 0.6rem;
	cursor: pointer;
`;

export const PopoverContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const MenuButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: transparent;
	width: 13rem;
	border: none;
	color: rgba(${({ theme }) => theme.colors.white});
	${styleUtils.fontFamily(400)}
	padding-bottom: 0.6rem;
	cursor: pointer;

	&:hover {
		${styleUtils.fontFamily(700)}
	}
`;
