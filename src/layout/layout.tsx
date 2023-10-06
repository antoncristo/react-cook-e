import { type ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { userStore } from '@cooke/stores/user-store';
import { BreakPointSwitch } from '@cooke/shared';
import { breakpoints } from '@cooke/style';

import { Header, Menu, Alert, BottomNav } from './components';

import * as Styled from './layout.styled';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = observer(({ children }: LayoutProps) => {
	const { user } = userStore;

	return (
		<Styled.Layout>
			{user ? (
				<Styled.Children>
					<Header />
					<Styled.Body>
						<BreakPointSwitch
							before={<BottomNav />}
							switchAt={`${breakpoints.mobile.width}px`}
							after={<Menu />}
						/>
						<Styled.AppOutlet>{children}</Styled.AppOutlet>
					</Styled.Body>
				</Styled.Children>
			) : (
				children
			)}
			<Alert />
		</Styled.Layout>
	);
});
