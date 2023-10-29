import { type SVGProps } from 'react';
import { type IconMargin } from './icon-template';
import { useThemeContext } from '@cooke/style';

export const LogOutIcon = ({
	width = 18,
	height = 18,
	...margin
}: SVGProps<SVGSVGElement> & IconMargin): JSX.Element => {
	const cookeTheme = useThemeContext();
	const { bottom = '0', left = '0', right = '0', top = '0' } = margin;

	return (
		<div style={{ margin: `${top} ${right} ${bottom} ${left}`, height: `${height}px` }}>
			<svg width={width} height={height} viewBox='0 0 24 24' fill='none'>
				<circle cx='12' cy='6' r='4' fill={`rgb(${cookeTheme.colors.primary})`} />
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M16.5 22C14.8501 22 14.0251 22 13.5126 21.4874C13 20.9749 13 20.1499 13 18.5C13 16.8501 13 16.0251 13.5126 15.5126C14.0251 15 14.8501 15 16.5 15C18.1499 15 18.9749 15 19.4874 15.5126C20 16.0251 20 16.8501 20 18.5C20 20.1499 20 20.9749 19.4874 21.4874C18.9749 22 18.1499 22 16.5 22ZM15.3569 16.532C15.1291 16.3042 14.7598 16.3042 14.532 16.532C14.3042 16.7598 14.3042 17.1291 14.532 17.3569L15.675 18.5L14.532 19.6431C14.3042 19.8709 14.3042 20.2402 14.532 20.468C14.7598 20.6958 15.1291 20.6958 15.3569 20.468L16.5 19.325L17.6431 20.468C17.8709 20.6958 18.2402 20.6958 18.468 20.468C18.6958 20.2402 18.6958 19.8709 18.468 19.6431L17.325 18.5L18.468 17.3569C18.6958 17.1291 18.6958 16.7598 18.468 16.532C18.2402 16.3042 17.8709 16.3042 17.6431 16.532L16.5 17.675L15.3569 16.532Z'
					fill={`rgb(${cookeTheme.colors.grey})`}
				/>
				<path
					d='M18.0947 15.0312C17.6699 15 17.1487 15 16.5 15C14.8501 15 14.0251 15 13.5126 15.5126C13 16.0251 13 16.8501 13 18.5C13 19.6663 13 20.4204 13.1811 20.9433C12.7971 20.9806 12.4025 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C14.6134 13 16.8924 13.8184 18.0947 15.0312Z'
					fill={`rgb(${cookeTheme.colors.primary})`}
				/>
			</svg>
		</div>
	);
};
