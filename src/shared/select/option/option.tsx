import { type OptionHTMLAttributes } from 'react';

import * as Styled from './option.styled';

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

export const Option = (props: OptionProps) => {
	const { value, label, ...rest } = props;

	return (
		<Styled.Option value={value} {...rest}>
			{label}
		</Styled.Option>
	);
};
