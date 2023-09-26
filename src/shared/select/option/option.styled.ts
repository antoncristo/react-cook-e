import styled from 'styled-components';

export const Option = styled.option`
	color: rgba(${({ theme }) => theme.colors.white});
	font-weight: bold;
	background-color: rgba(${({ theme }) => theme.colors.secondary}, 0.9);
`;
