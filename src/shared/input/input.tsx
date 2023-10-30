import { type InputHTMLAttributes, forwardRef } from 'react';

import * as Styled from './input.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	width?: string;
	isValid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { width, isValid = true, ...rest } = props;
	return <Styled.Input ref={ref} {...rest} $isValid={isValid} width={width} />;
});

Input.displayName = 'Input';
