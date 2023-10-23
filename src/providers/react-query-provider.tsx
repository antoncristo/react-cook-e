import { type ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '@cooke/api';

interface ReactQueryProviderProps {
	children: ReactNode;
}

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => (
	<QueryClientProvider client={queryClient}>
		{children}
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
);
