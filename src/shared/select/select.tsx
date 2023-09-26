import { type ReactNode, type SelectHTMLAttributes } from 'react';

import * as Styled from './select.styled';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	children: ReactNode;
}

export const Select = (props: SelectProps) => {
	const { children } = props;

	return <Styled.Select>{children}</Styled.Select>;
};
