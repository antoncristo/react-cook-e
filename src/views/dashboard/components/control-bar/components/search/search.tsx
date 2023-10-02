import { type FocusEventHandler, type ChangeEventHandler } from 'react';
import { observer } from 'mobx-react-lite';
import { useGetRecipes } from '@cooke/api/recipe';
import { recipesStore } from '@cooke/stores/recipes-store';

import * as Styled from './search.styled';

export const Search = observer(() => {
	const { searchQuery } = recipesStore;
	useGetRecipes({ search: searchQuery });

	const onFocus: FocusEventHandler<HTMLInputElement> = focus => {
		focus.currentTarget.select();
	};

	const onChange: ChangeEventHandler<HTMLInputElement> = change => {
		recipesStore.searchQuery = change.currentTarget.value;
	};

	return (
		<Styled.Search placeholder='Find a Recipe...' onChange={onChange} onFocus={onFocus} />
	);
});
