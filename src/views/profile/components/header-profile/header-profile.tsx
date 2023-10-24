import { type MouseEventHandler, useState } from 'react';
import { cookePathnames } from '@cooke/router';
import { userStore } from '@cooke/stores/user-store';
import { confirmationHandler } from '@cooke/utils';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LogOutIcon } from '@cooke/assets/icons/log-out-icon';
import { SettingsIcon, UserIcon } from '@cooke/assets';
import { Popover } from '@cooke/shared';

import * as Styled from './header-profile.styled';

export const HeaderProfile = () => {
	const { t } = useTranslation('dashboard', { keyPrefix: 'header.profileMenu' });
	const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
	const navigate = useNavigate();

	const onProfileClickHandler: MouseEventHandler = event => {
		setAnchor(event.currentTarget as HTMLButtonElement);
	};

	const oncloseHandler = () => {
		setAnchor(null);
	};

	const goToProfile = () => {
		navigate(cookePathnames.authenticatedPathNames.PROFILE);
	};

	const preLogout = () => {
		confirmationHandler({ msg: 'Are you sure ypu wnat to logout ?', cb: logOut });
	};

	const logOut = () => {
		userStore.logOut();
	};

	const goToSettings = () => {
		navigate(cookePathnames.authenticatedPathNames.SETTINGS);
	};

	return (
		<Styled.HeaderProfile>
			<Styled.ProfileButton onClick={onProfileClickHandler}>
				<UserIcon />
			</Styled.ProfileButton>
			<Popover relativeToAnchorX='left' anchor={anchor} onClose={oncloseHandler}>
				<Styled.PopoverContent>
					<Styled.MenuButton onMouseDown={goToProfile}>{t('profile')}</Styled.MenuButton>
					<Styled.MenuButton onMouseDown={goToSettings}>
						<SettingsIcon right='10px' /> {t('settings')}
					</Styled.MenuButton>
					<Styled.MenuButton onMouseDown={preLogout}>
						<LogOutIcon right='10px' /> {t('logout')}
					</Styled.MenuButton>
				</Styled.PopoverContent>
			</Popover>
		</Styled.HeaderProfile>
	);
};
