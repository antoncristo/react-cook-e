import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import { type ButtonVariant } from './button.types';

import * as Styled from './button.styled';

const DEFAULT_WIDTH = '10rem';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	width?: string;
	variant?: ButtonVariant;
}

export const Button = (props: ButtonProps) => {
	const {
		children,
		variant = 'primary',
		width = DEFAULT_WIDTH,
		disabled = false,
		...rest
	} = props;

	return (
		<Styled.Button
			width={width}
			$variant={disabled ? undefined : variant}
			disabled={disabled}
			{...rest}
		>
			{children}
		</Styled.Button>
	);
};
