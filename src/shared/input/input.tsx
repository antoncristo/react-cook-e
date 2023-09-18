import { type InputHTMLAttributes } from 'react';

import * as Styled from './input.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	width?: string;
	isValid?: boolean;
}

export const Input = (props: InputProps) => {
	const { width, isValid = true, ...rest } = props;
	return <Styled.Input {...rest} $isValid={isValid} width={width} />;
};
