import { type ReactNode } from 'react';

import { ThemeProvider } from './theme-provider';
import { ReactQueryProvider } from './react-query-provider';

interface ProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
	<ReactQueryProvider>
		<ThemeProvider>{children}</ThemeProvider>
	</ReactQueryProvider>
);
