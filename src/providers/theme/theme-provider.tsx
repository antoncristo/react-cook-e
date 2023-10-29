import { Suspense, type ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { preferencesStore } from '@cooke/stores/preferences-store';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { cookeDarkTheme, cookeLightTheme } from '@cooke/style';

import * as Styled from './theme-provider.styled';
import { Loader } from '@cooke/shared';

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = observer(({ children }: ThemeProviderProps) => {
	const { preferences } = preferencesStore;

	const _theme = preferences?.colorScheme === 'light' ? cookeLightTheme : cookeDarkTheme;

	return (
		<StyledComponentsThemeProvider theme={_theme}>
			<Styled.GlobalStyle>{children}</Styled.GlobalStyle>
		</StyledComponentsThemeProvider>
	);
});
