import { type ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { cookeDarkTheme } from '@cooke/style';

import * as Styled from './theme-provider.styled';

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
	<StyledComponentsThemeProvider theme={cookeDarkTheme}>
		<Styled.GlobalStyle>{children}</Styled.GlobalStyle>
	</StyledComponentsThemeProvider>
);
