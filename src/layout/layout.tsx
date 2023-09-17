import { type ReactNode } from 'react';

import * as Styled from './layout.styled';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
	<Styled.Layout>{children}</Styled.Layout>
);
