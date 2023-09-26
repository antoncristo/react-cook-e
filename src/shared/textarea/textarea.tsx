import { type TextareaHTMLAttributes } from 'react';

import * as Styled from './textarea.styled';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	width?: string;
	isValid?: boolean;
}

export const TextArea = (props: TextAreaProps) => {
	const { width, isValid = true, ...rest } = props;
	return <Styled.TextArea {...rest} $isValid={isValid} width={width} />;
};
