import { Colors } from './colors';

export type BaseColor =
	| 'primary'
	| 'secondary'
	| 'black'
	| 'white'
	| 'grey'
	| 'pastel'
	| 'error'
	| 'warning'
	| 'success';

export interface Decorators {
	boxShadow: {
		primary: string;
		secondary: string;
		error: string;
	};
	textShadow: {
		primary: string;
	};
	padding: {
		default: string;
	};
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
		pastel: Colors.PASTEL,
		primary: Colors.PRIMARY,
		secondary: Colors.SECONDARY,
		success: Colors.SUCCESS,
		warning: Colors.WARNING,
		error: Colors.ERROR
	},
	decorators: {
		boxShadow: {
			primary: `0.1rem 0.1rem 1rem 0.1rem rgba(${Colors.BLACK}, 0.6)`,
			secondary: `0.1rem 0.1rem 1rem 0.1rem rgba(${Colors.BLACK}, 0.3)`,
			error: `0.1rem 0.1rem 1rem 0.1rem rgba(${Colors.ERROR}, 0.9)`
		},
		textShadow: {
			primary: '0.1rem 0.1rem 0.6rem black'
		},
		padding: {
			default: '2rem'
		}
	}
};
