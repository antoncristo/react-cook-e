import { type SVGProps } from 'react';
import { Colors } from 'src/style/colors';
import { type IconMargin } from './icon-template';

export const BookIcon = ({
	width = 18,
	height = 18,
	fill = Colors.BLACK,
	...margin
}: SVGProps<SVGSVGElement> & IconMargin): JSX.Element => {
	const { bottom = '0', left = '0', right = '0', top = '0' } = margin;

	return (
		<div style={{ margin: `${top} ${right} ${bottom} ${left}` }}>
			<svg width={width} height={height} viewBox='0 0 24 24' fill='none'>
				<path
					d='M12 5.29994V21.3299C11.83 21.3299 11.65 21.2999 11.51 21.2199L11.47 21.1999C9.55 20.1499 6.2 19.0499 4.03 18.7599L3.74 18.7199C2.78 18.5999 2 17.6999 2 16.7399V4.65994C2 3.46994 2.97 2.56994 4.16 2.66994C6.26 2.83994 9.44 3.89994 11.22 5.00994L11.47 5.15994C11.62 5.24994 11.81 5.29994 12 5.29994Z'
					fill={`rgb(${Colors.PRIMARY})`}
				/>
				<path
					d='M22 4.67003V16.74C22 17.7 21.22 18.6 20.26 18.72L19.93 18.76C17.75 19.05 14.39 20.16 12.47 21.22C12.34 21.3 12.18 21.33 12 21.33V5.30003C12.19 5.30003 12.38 5.25003 12.53 5.16003L12.7 5.05003C14.48 3.93003 17.67 2.86003 19.77 2.68003H19.83C21.02 2.58003 22 3.47003 22 4.67003Z'
					fill={`rgb(${Colors.GREY})`}
				/>
				<path
					d='M7.75 9.23999H5.5C5.09 9.23999 4.75 8.89999 4.75 8.48999C4.75 8.07999 5.09 7.73999 5.5 7.73999H7.75C8.16 7.73999 8.5 8.07999 8.5 8.48999C8.5 8.89999 8.16 9.23999 7.75 9.23999Z'
					fill={`rgb(${Colors.BLACK})`}
				/>
				<path
					d='M8.5 12.24H5.5C5.09 12.24 4.75 11.9 4.75 11.49C4.75 11.08 5.09 10.74 5.5 10.74H8.5C8.91 10.74 9.25 11.08 9.25 11.49C9.25 11.9 8.91 12.24 8.5 12.24Z'
					fill={`rgb(${Colors.BLACK})`}
				/>
			</svg>
		</div>
	);
};
