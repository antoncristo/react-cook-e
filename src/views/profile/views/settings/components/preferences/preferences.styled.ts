import styled from 'styled-components';

export const Preferences = styled.div`
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};
	border-radius: 1.2rem;
	padding: ${({ theme }) => theme.decorators.padding.default};
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

export const Footer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	gap: 1.6rem;
`;
