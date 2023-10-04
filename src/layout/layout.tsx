import { type ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { userStore } from '@cooke/stores/user-store';

import { Header, Menu, Alert } from './components';

import * as Styled from './layout.styled';
import { BreakPointSwitch } from '@cooke/shared';

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
						<BreakPointSwitch before={null} switchAt='768px' after={<Menu />} />
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
