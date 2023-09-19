import { type ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { cookeTheme } from '@cooke/style';

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
	<StyledComponentsThemeProvider theme={cookeTheme}>
		{children}
	</StyledComponentsThemeProvider>
);
