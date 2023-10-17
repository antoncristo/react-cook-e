import { type MouseEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOutIcon } from '@cooke/assets/icons/log-out-icon';
import { UserIcon } from '@cooke/assets';
import { Popover } from '@cooke/shared';

import * as Styled from './header-profile.styled';
import { cookePathnames } from '@cooke/router';
import { userStore } from '@cooke/stores/user-store';
import { confirmationHandler } from '@cooke/utils';

export const HeaderProfile = () => {
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

	return (
		<Styled.HeaderProfile>
			<Styled.ProfileButton onClick={onProfileClickHandler}>
				<UserIcon />
			</Styled.ProfileButton>
			<Popover relativeToAnchorX='left' anchor={anchor} onClose={oncloseHandler}>
				<Styled.PopoverContent>
					<Styled.MenuButton onMouseDown={goToProfile}>Profile</Styled.MenuButton>
					<Styled.MenuButton onMouseDown={preLogout}>
						<LogOutIcon right='10px' /> Log Out
					</Styled.MenuButton>
				</Styled.PopoverContent>
			</Popover>
		</Styled.HeaderProfile>
	);
};
