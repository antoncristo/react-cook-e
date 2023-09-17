import { Colors } from './colors';

export type BaseColor =
	| 'primary'
	| 'secondary'
	| 'ternary'
	| 'black'
	| 'white'
	| 'grey'
	| 'error'
	| 'warning'
	| 'success';

export interface Decorators {
	boxShadow: string;
}

export interface CookeTheme {
	colors: Record<BaseColor, Colors>;
	decorators: Decorators;
}

export const cookeTheme: CookeTheme = {
	colors: {
		black: Colors.BLACK,
		white: Colors.WHITE,
		grey: Colors.GREY,
		primary: Colors.PRIMARY,
		secondary: Colors.SECONDARY,
		ternary: Colors.TERNARY,
		success: Colors.SUCCESS,
		warning: Colors.WARNING,
		error: Colors.ERROR
	},
	decorators: {
		boxShadow: `0.1rem 0.1rem 1rem 0.1rem rgba(${Colors.BLACK}, 0.3)`
	}
};