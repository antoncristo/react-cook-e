import { type SVGProps } from 'react';
import { type IconMargin } from './icon-template';
import { useThemeContext } from '@cooke/style';

export const CopyIcon = ({
	width = 18,
	height = 18,
	...margin
}: SVGProps<SVGSVGElement> & IconMargin): JSX.Element => {
	const cookeTheme = useThemeContext();
	const { bottom = '0', left = '0', right = '0', top = '0' } = margin;

	return (
		<div style={{ margin: `${top} ${right} ${bottom} ${left}`, height: `${height}px` }}>
			<svg width={width} height={height} viewBox='0 0 24 24' fill='none'>
				<path
					d='M6.59961 11.3974C6.59961 8.67119 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C17.9549 5.61426 19.3125 5.61426 20.1561 6.46118C20.9996 7.3081 20.9996 8.6712 20.9996 11.3974V16.2167C20.9996 18.9429 20.9996 20.306 20.1561 21.1529C19.3125 21.9998 17.9549 21.9998 15.2396 21.9998H12.3596C9.64432 21.9998 8.28667 21.9998 7.44314 21.1529C6.59961 20.306 6.59961 18.9429 6.59961 16.2167V11.3974Z'
					fill={`rgb(${cookeTheme.colors.orange})`}
				/>
				<path
					opacity='0.6'
					d='M4.17157 3.17157C3 4.34315 3 6.22876 3 10V12C3 15.7712 3 17.6569 4.17157 18.8284C4.78913 19.446 5.6051 19.738 6.79105 19.8761C6.59961 19.0353 6.59961 17.8796 6.59961 16.2167V11.3974C6.59961 8.6712 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C16.8915 5.61426 18.0409 5.61426 18.8777 5.80494C18.7403 4.61146 18.4484 3.79154 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157Z'
					fill={`rgb(${cookeTheme.colors.orange})`}
				/>
			</svg>{' '}
		</div>
	);
};