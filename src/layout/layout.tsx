import { type ReactNode } from 'react';

import { Header } from './components';

import * as Styled from './layout.styled';
import { useQueryClient } from 'react-query';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	// Fix: sync with user api
	const isLoggedIn = false;

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
