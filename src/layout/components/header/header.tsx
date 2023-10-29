import { CookeLogo } from '@cooke/shared';
import { HeaderProfile } from '@cooke/views/profile/components';

import * as Styled from './header.styled';

export const Header = () => (
	<Styled.Header>
		<Styled.Section $justify='center' $flex={1} />
		<Styled.Section $justify='center' $flex={3}>
			<CookeLogo fontSize='3.6rem' iconDiameter={40} />
		</Styled.Section>
		<Styled.Section $justify='flex-end' $flex={1}>
			<HeaderProfile />
		</Styled.Section>
	</Styled.Header>
);
