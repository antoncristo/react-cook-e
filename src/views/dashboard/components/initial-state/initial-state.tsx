import { Loader } from '@cooke/shared';
import * as Styled from './initial-state.styled';
import { cookePathnames } from '@cooke/router';

export const InitialState = () => (
	<Styled.InitialState>
		<Loader size='M' />
		<Styled.LinkButton to={cookePathnames.authenticatedPathNames.CREATE_RECIPE}>
			LET`S START COOKING
		</Styled.LinkButton>
		<Loader size='M' />
	</Styled.InitialState>
);
