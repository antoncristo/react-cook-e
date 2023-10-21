import { Text, type TextProps } from '@cooke/shared';

import * as Styled from './label.styled';

interface LabelProps extends TextProps {
	htmlFor?: string;
}

export const Label = (props: LabelProps) => {
	const { htmlFor, style, ...textProps } = props;
	const { text, ...rest } = textProps;

	return (
		<Styled.Label htmlFor={htmlFor}>
			<Text text={text} {...rest} style={style} />
		</Styled.Label>
	);
};
