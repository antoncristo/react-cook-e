import styled from 'styled-components';

export const HeaderProfile = styled.div``;

export const ProfileButton = styled.button`
	border: 0.1rem solid rgba(${({ theme }) => theme.colors.ternary}, 1);
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
	font-family: 'cooke-400';
	padding-bottom: 0.6rem;
	border-bottom: 0.1rem dashed rgba(${({ theme }) => theme.colors.white});
	cursor: pointer;

	&:hover {
		font-family: 'cooke-600';
	}
`;