import { cookePathnames } from '@cooke/router';
import { BookIcon, FavoritesIcon, WriteIcon } from '@cooke/assets';

import * as Styled from './nav-list.styled';

export const NavList = () => (
	<Styled.NavList>
		<Styled.MenuLink to={cookePathnames.authenticatedPathNames.DASHBOARD}>
			<BookIcon right='1rem' />
			Dashboard
		</Styled.MenuLink>
		<Styled.MenuLink to={cookePathnames.authenticatedPathNames.CREATE_RECIPE} end>
			<WriteIcon right='1rem' /> Add Recipe
		</Styled.MenuLink>
		<Styled.MenuLink to={cookePathnames.authenticatedPathNames.FAVORITES} end>
			<FavoritesIcon right='0.6rem' />
			Favorites
		</Styled.MenuLink>
	</Styled.NavList>
);
