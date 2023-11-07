import { useTranslation } from 'react-i18next';
import { cookePathnames } from '@cooke/router';
import { BookIcon, FavoritesIcon, WriteIcon } from '@cooke/assets';

import * as Styled from './bottom-nav.styled';

export const BottomNav = () => {
	const { t } = useTranslation('dashboard', { keyPrefix: 'nav' });

	return (
		<Styled.BottomNav>
			<Styled.BottomNavLink to={cookePathnames.authenticatedPathNames.DASHBOARD}>
				<BookIcon right='0.6rem' />
				{t('dashboard')}
			</Styled.BottomNavLink>
			<Styled.BottomNavLink to={cookePathnames.authenticatedPathNames.CREATE_RECIPE} end>
				<WriteIcon right='0.6rem' /> {t('wizard')}
			</Styled.BottomNavLink>
			<Styled.BottomNavLink to={cookePathnames.authenticatedPathNames.FAVORITES} end>
				<FavoritesIcon right='0.3rem' />
				{t('favorites')}
			</Styled.BottomNavLink>
		</Styled.BottomNav>
	);
};
