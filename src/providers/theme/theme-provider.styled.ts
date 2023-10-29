import styled from 'styled-components';

export const GlobalStyle = styled.div`
	*:focus {
		outline: 0.1rem solid rgba(${({ theme }) => theme.colors.primary});
	}
`;
