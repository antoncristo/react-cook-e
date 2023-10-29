import { type ReactNode } from 'react';

import { ThemeProvider } from './theme/theme-provider';
import { ReactQueryProvider } from './react-query-provider';
import { LocalizationProvider } from './localization';

interface ProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
	<ReactQueryProvider>
		<ThemeProvider>
			<LocalizationProvider>{children}</LocalizationProvider>
		</ThemeProvider>
	</ReactQueryProvider>
);
