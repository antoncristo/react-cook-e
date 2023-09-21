import { type HTMLAttributes } from 'react';

import * as Styled from './text.styled';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
	text: string;
	maxWidth?: string;
	fontSize?: string;
	numberOfLines?: number;
}

export const Text = (props: TextProps) => {
	const { maxWidth, fontSize, numberOfLines = 1, text, ...rest } = props;

	return (
		<Styled.Text
			maxWidth={maxWidth}
			fontSize={fontSize}
			numberOfLines={numberOfLines}
			{...rest}
		>
			{text}
		</Styled.Text>
	);
};
