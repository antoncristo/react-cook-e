import { useState, type FocusEventHandler, type ChangeEventHandler } from 'react';
import { useGetRecipes } from '@cooke/api/recipe';

import * as Styled from './search.styled';

export const Search = () => {
	const [_search, setSearch] = useState('');

	const { recipes } = useGetRecipes({ search: _search, enabled: Boolean(_search) });

	const onFocus: FocusEventHandler<HTMLInputElement> = focus => {
		focus.currentTarget.select();
	};

	const onChange: ChangeEventHandler<HTMLInputElement> = change => {
		setSearch(change.currentTarget.value);
	};

	return (
		<Styled.Search placeholder='Find a Recipe...' onChange={onChange} onFocus={onFocus} />
	);
};
