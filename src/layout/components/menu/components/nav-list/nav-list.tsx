import { cookePathnames } from '@cooke/router';
import { BookIcon, FavoritesIcon, WriteIcon } from '@cooke/assets';

import * as Styled from './nav-list.styled';
import { useTranslation } from 'react-i18next';

export const NavList = () => {
	const { t } = useTranslation('dashboard', { keyPrefix: 'nav' });

	return (
		<Styled.NavList>
			<Styled.MenuLink to={cookePathnames.authenticatedPathNames.DASHBOARD}>
				<BookIcon right='1rem' />
				{t('dashboard')}
			</Styled.MenuLink>
			<Styled.MenuLink to={cookePathnames.authenticatedPathNames.CREATE_RECIPE} end>
				<WriteIcon right='1rem' /> {t('wizard')}
			</Styled.MenuLink>
			<Styled.MenuLink to={cookePathnames.authenticatedPathNames.FAVORITES} end>
				<FavoritesIcon right='0.6rem' />
				{t('favorites')}
			</Styled.MenuLink>
		</Styled.NavList>
	);
};
