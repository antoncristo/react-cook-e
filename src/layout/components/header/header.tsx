import { CookeLogo } from '@cooke/shared';

import * as Styled from './header.styled';

export const Header = () => (
	<Styled.Header>
		<CookeLogo fontSize='4rem' iconDiameter={40} />
	</Styled.Header>
);
