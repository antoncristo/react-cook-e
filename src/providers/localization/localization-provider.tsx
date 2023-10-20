import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18';

export const LocalizationProvider = ({ children }: { children: ReactNode }) => (
	<I18nextProvider i18n={i18n} defaultNS='dashboard'>
		{children}
	</I18nextProvider>
);
