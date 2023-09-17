import { type ReactNode } from 'react';

import * as Styled from './layout.styled';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = (props: LayoutProps) => (
	<Styled.Layout>{props.children}</Styled.Layout>
);
