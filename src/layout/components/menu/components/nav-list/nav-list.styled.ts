import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { styleUtils } from '@cooke/style';

export const NavList = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1.6rem;
`;

export const MenuLink = styled(NavLink)`
	box-sizing: border-box;
	font-size: 1.4rem;
	text-decoration: none;
	color: rgba(${({ theme }) => theme.colors.ternary}, 1);
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 ${({ theme }) => theme.decorators.padding.default};
	width: 100%;
	border-bottom: 0.1rem dashed transparent;
	transition: all 0.26s ease-in-out;

	&:focus,
	&.active,
	&:hover {
		${styleUtils.fontFamily(700)}
		border-bottom: 0.1rem dashed rgba(${({ theme }) => theme.colors.ternary}, 1);
	}

	&:focus {
		outline: none;
	}
`;
