import { type ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@cooke/api';

interface ReactQueryProviderProps {
	children: ReactNode;
}

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
