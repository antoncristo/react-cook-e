import { type ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { userStore } from '@cooke/stores/user-store';
import { alertStore } from '@cooke/stores/alert-store';

import { Header, Menu, Alert } from './components';

import * as Styled from './layout.styled';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = observer(({ children }: LayoutProps) => {
	const { user } = userStore;
	const { dismiss } = alertStore;

	return (
		<Styled.Layout>
			{user ? (
				<Styled.Children>
					<Header />
					<Styled.Body>
						<Menu />
						<Styled.AppOutlet>{children}</Styled.AppOutlet>
					</Styled.Body>
				</Styled.Children>
			) : (
				children
			)}
			{alertStore.showAlert ? <Alert /> : null}
		</Styled.Layout>
	);
});
