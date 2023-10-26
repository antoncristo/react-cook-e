import { type ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { cookeTheme } from '@cooke/style';

import * as Styled from './theme-provider.styled';

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
	<StyledComponentsThemeProvider theme={cookeTheme}>
		<Styled.GlobalStyle>{children}</Styled.GlobalStyle>
	</StyledComponentsThemeProvider>
);
