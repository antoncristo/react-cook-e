import 'styled-components';
import { type CookeTheme } from './theme';

declare module 'styled-components' {
	export interface DefaultTheme extends CookeTheme {}
}
