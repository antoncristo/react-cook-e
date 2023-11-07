import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MatchItem = styled.li`
	box-sizing: border-box;
	width: 100%;
	min-height: 3rem;
	padding: 0 1.6rem;
	display: flex;
	align-items: center;
	cursor: pointer;

	&:hover a {
		font-family: 'cooke-400';
		font-size: 1.6rem;
		color: rgba(${({ theme }) => theme.colors.orange}, 1);
	}
`;

export const MatchItemLink = styled(NavLink)`
	font-family: 'cooke-300';
	text-decoration: none;
	font-size: 1.4rem;
	color: rgba(${({ theme }) => theme.colors.white}, 1);
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	&:focus {
		outline: none;
	}
`;
