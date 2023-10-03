import { type SVGProps } from 'react';
import { Colors } from 'src/style/colors';

export interface IconMargin {
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;
}

export const IconTemplate = ({
	width = 20,
	height = 20,
	fill = Colors.BLACK,
	...margin
}: SVGProps<SVGSVGElement> & IconMargin): JSX.Element => {
	const { bottom = '0', left = '0', right = '0', top = '0' } = margin;

	return (
		<div style={{ margin: `${top} ${right} ${bottom} ${left}` }}>
			<svg width={width} height={height} viewBox='0 -960 960 960'>
				<path
					fill={fill}
					d='m480-342 182-182-52-51-130 130-130-130-52 51 182 182Zm-.458 278Q394.36-64 318.52-97.02q-75.84-33.02-132.16-89.34-56.32-56.32-89.34-132.291T64-480q0-86.272 33.079-162.149 33.079-75.878 89.686-132.47 56.606-56.592 132.216-88.986Q394.59-896 479.557-896q86.329 0 162.512 32.395 76.183 32.394 132.557 89Q831-718 863.5-641.958q32.5 76.041 32.5 162.5 0 85.458-32.395 160.797-32.394 75.338-88.986 131.921-56.592 56.582-132.616 89.661Q565.979-64 479.542-64Zm.458-73q142.513 0 242.756-100.744Q823-338.487 823-480q0-142.513-100.244-242.756Q622.513-823 480-823q-141.513 0-242.256 100.244Q137-622.513 137-480q0 141.513 100.744 242.256Q338.487-137 480-137Zm0-343Z'
				/>
			</svg>
		</div>
	);
};
