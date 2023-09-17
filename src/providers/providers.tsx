import { type ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { cookeTheme } from '../style';

interface ProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
	<ThemeProvider theme={cookeTheme}>{children}</ThemeProvider>
);
