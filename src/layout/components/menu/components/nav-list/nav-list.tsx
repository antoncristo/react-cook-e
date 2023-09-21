import { cookePathnames } from '@cooke/router';

import * as Styled from './nav-list.styled';

export const NavList = () => (
	<Styled.NavList>
		<Styled.MenuLink to={cookePathnames.authenticatedPathNames.DASHBOARD}>
			Dashboard
		</Styled.MenuLink>
		<Styled.MenuLink to={cookePathnames.authenticatedPathNames.CREATE_RECIPE} end>
			Add Recipe
		</Styled.MenuLink>
		<Styled.MenuLink to={cookePathnames.authenticatedPathNames.FAVORITES} end>
			Favorites
		</Styled.MenuLink>
	</Styled.NavList>
);
