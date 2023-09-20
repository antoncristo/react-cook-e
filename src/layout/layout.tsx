import { type ReactNode } from 'react';
import { useSelector } from '@legendapp/state/react';
import { userStore } from '@cooke/stores/user-store';

import { Header } from './components';

import * as Styled from './layout.styled';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	const isLoggedIn = useSelector(() => userStore.get());

	return (
		<Styled.Layout>
			{isLoggedIn ? (
				<Styled.Children>
					<Header />
					<Styled.Body>
						<div>menu</div>
						<Styled.AppOutlet>{children}</Styled.AppOutlet>
					</Styled.Body>
				</Styled.Children>
			) : (
				children
			)}
		</Styled.Layout>
	);
};
