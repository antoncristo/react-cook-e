import { CookeLogo } from '@cooke/shared';
import { HeaderProfile } from '@cooke/views/profile/components';

import * as Styled from './header.styled';

export const Header = () => (
	<Styled.Header>
		<Styled.Section $justify='center' />
		<Styled.Section $justify='center'>
			<CookeLogo fontSize='4rem' iconDiameter={40} />
		</Styled.Section>
		<Styled.Section $justify='flex-end'>
			<HeaderProfile />
		</Styled.Section>
	</Styled.Header>
);
