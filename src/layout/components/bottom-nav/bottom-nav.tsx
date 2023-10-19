import { cookePathnames } from '@cooke/router';
import { BookIcon, FavoritesIcon, WriteIcon } from '@cooke/assets';

import * as Styled from './bottom-nav.styled';

export const BottomNav = () => (
	<Styled.BottomNav>
		<Styled.BottomNavLink to={cookePathnames.authenticatedPathNames.DASHBOARD}>
			<Styled.BackgroundWrapper>
				<BookIcon right='0.6rem' />
				My Book
			</Styled.BackgroundWrapper>
		</Styled.BottomNavLink>
		<Styled.BottomNavLink to={cookePathnames.authenticatedPathNames.CREATE_RECIPE} end>
			<Styled.BackgroundWrapper>
				<WriteIcon right='0.6rem' /> Add Recipe
			</Styled.BackgroundWrapper>
		</Styled.BottomNavLink>
		<Styled.BottomNavLink to={cookePathnames.authenticatedPathNames.FAVORITES} end>
			<Styled.BackgroundWrapper>
				<FavoritesIcon right='0.3rem' />
				Favorites
			</Styled.BackgroundWrapper>
		</Styled.BottomNavLink>
	</Styled.BottomNav>
);
