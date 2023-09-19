import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

interface ReactQueryProviderProps {
	children: ReactNode;
}

export const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
