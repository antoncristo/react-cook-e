import { type MouseEventHandler, useState } from 'react';
import { UserIcon } from '@cooke/assets';
import { Popover } from '@cooke/shared';

import * as Styled from './header-profile.styled';
import { LogOutIcon } from '@cooke/assets/icons/log-out-icon';

export const HeaderProfile = () => {
	const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);

	const onProfileClickHandler: MouseEventHandler = event => {
		setAnchor(event.currentTarget as HTMLButtonElement);
	};

	const oncloseHandler = () => {
		setAnchor(null);
	};

	return (
		<Styled.HeaderProfile>
			<Styled.ProfileButton onClick={onProfileClickHandler}>
				<UserIcon />
			</Styled.ProfileButton>
			<Popover relativeToAnchorX='left' anchor={anchor} onClose={oncloseHandler}>
				<Styled.PopoverContent>
					<Styled.MenuButton>Profile</Styled.MenuButton>
					<Styled.MenuButton>
						<LogOutIcon right='10px' /> Log Out
					</Styled.MenuButton>
				</Styled.PopoverContent>
			</Popover>
		</Styled.HeaderProfile>
	);
};
