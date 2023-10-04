import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BottomNav = styled.div`
	box-sizing: border-box;
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;

	height: 5rem;
	width: 100%;

	background-color: rgba(${({ theme }) => theme.colors.black}, 0.6);
	border-top: 0.1rem solid rgba(${({ theme }) => theme.colors.ternary}, 1);
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};

	overflow-x: auto;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const BottomNavLink = styled(NavLink)`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1%;
	min-width: 33%;

	font-size: 1.4rem;
	text-decoration: none;

	background-color: transparent;
	color: rgba(${({ theme }) => theme.colors.ternary}, 1);

	transition: all 0.26s ease-in-out;

	&:focus,
	&.active,
	&:hover {
		font-family: 'cooke-600';
		border-bottom: 0.1rem dashed rgba(${({ theme }) => theme.colors.ternary}, 1);
		background-color: rgba(${({ theme }) => theme.colors.ternary}, 1);
	}

	&:focus {
		outline: none;
	}
`;

export const BackgroundWrapper = styled.div`
	display: flex;
	align-items: center;
	max-height: 2rem;
	padding: 1rem;
	border-radius: 1.2rem;
	background-color: rgba(${({ theme }) => theme.colors.black}, 1);
`;
