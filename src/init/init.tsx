import { type ReactNode } from 'react';
import { useInitPreferences } from './hooks';
import { Loader, NetworkError } from '@cooke/shared';

export const Init = ({ children }: { children: ReactNode }) => {
	const { isError, isLoading } = useInitPreferences();

	if (isError) {
		return <NetworkError />;
	}

	return isLoading ? <Loader size='L' /> : children;
};
