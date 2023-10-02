import { type FocusEventHandler } from 'react';

import * as Styled from './search.styled';

export const Search = () => {
	const onFocus: FocusEventHandler<HTMLInputElement> = focus => {
		focus.currentTarget.select();
	};

	return <Styled.Search placeholder='Find a Recipe...' onFocus={onFocus} />;
};
