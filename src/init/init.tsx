import { type ReactNode } from 'react';
import { useInitPreferences } from './hooks';

export const Init = ({ children }: { children: ReactNode }) => {
	useInitPreferences();

	return children;
};
