import { cookePathnames } from '@cooke/router';
import { BookIcon, FavoritesIcon, WriteIcon } from '@cooke/assets';

import * as Styled from './bottom-nav.styled';

export const BottomNav = () => (
	<Styled.BottomNav>
		<Styled.BottomNavLink to={cookePathnames.authenticatedPathNames.DASHBOARD}>
			<BookIcon right='0.6rem' />
			My Book
		</Styled.BottomNavLink>
		<Styled.BottomNavLink to={cookePathnames.authenticatedPathNames.CREATE_RECIPE} end>
			<WriteIcon right='0.6rem' /> Add Recipe
		</Styled.BottomNavLink>
		<Styled.BottomNavLink to={cookePathnames.authenticatedPathNames.FAVORITES} end>
			<FavoritesIcon right='0.3rem' />
			Favorites
		</Styled.BottomNavLink>
	</Styled.BottomNav>
);
