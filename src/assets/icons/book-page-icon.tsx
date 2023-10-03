import { type SVGProps } from 'react';
import { Colors } from '@cooke/style/colors';
import { type IconMargin } from './icon-template';

export const BookPageIcon = ({
	width = 18,
	height = 18,
	fill = Colors.BLACK,
	...margin
}: SVGProps<SVGSVGElement> & IconMargin): JSX.Element => {
	const { bottom = '0', left = '0', right = '0', top = '0' } = margin;

	return (
		<div style={{ margin: `${top} ${right} ${bottom} ${left}`, height: `${height}px` }}>
			<svg width={width} height={height} viewBox='0 0 24 24' fill='none'>
				<path
					d='M12 5.30019V21.3302C12.17 21.3302 12.35 21.3002 12.49 21.2202L12.53 21.2002C14.45 20.1502 17.8 19.0502 19.97 18.7602L20.26 18.7202C21.22 18.6002 22 17.7002 22 16.7402V4.66018C22 3.47018 21.03 2.57019 19.84 2.67019C17.74 2.84019 14.56 3.90022 12.78 5.01022L12.53 5.16018C12.38 5.25018 12.19 5.30019 12 5.30019Z'
					fill={`rgb(${Colors.GREY})`}
				/>
				<path
					d='M2 4.67002V16.74C2 17.7 2.77999 18.6 3.73999 18.72L4.07001 18.76C6.25001 19.05 9.61003 20.16 11.53 21.22C11.66 21.3 11.82 21.3301 12 21.3301V5.30002C11.81 5.30002 11.62 5.25001 11.47 5.16001L11.3 5.05002C9.51999 3.93002 6.32998 2.86003 4.22998 2.68003H4.16998C2.97998 2.58003 2 3.47002 2 4.67002Z'
					fill={`rgb(${Colors.PRIMARY})`}
				/>
				<path
					d='M19 2.78027V7.07025C19 7.47025 18.56 7.71023 18.22 7.49023L17 6.68024L15.78 7.49023C15.45 7.71023 15 7.47025 15 7.07025V3.92023C16.31 3.40023 17.77 2.98027 19 2.78027Z'
					fill={`rgb(${Colors.BLACK})`}
				/>
			</svg>
		</div>
	);
};
