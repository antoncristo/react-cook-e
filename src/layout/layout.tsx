import { type ReactNode } from 'react';

import { Header } from './components';

import * as Styled from './layout.styled';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	// Fix: sync with user api
	const isLoggedIn = true;

	return (
		<Styled.Layout>
			{isLoggedIn ? (
				<Styled.Children>
					<Header />
					{children}
				</Styled.Children>
			) : (
				children
			)}
		</Styled.Layout>
	);
};
