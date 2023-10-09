import { type FocusEventHandler, type ChangeEventHandler, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useGetRecipes } from '@cooke/api/recipe';
import { recipesStore } from '@cooke/stores/recipes-store';
import { useDebounce } from '@cooke/hooks';

import * as Styled from './search.styled';

export const Search = observer(() => {
	const { searchQuery } = recipesStore;
	const [searchQueryLocal, setSearchQueryLocal] = useState('');

	useGetRecipes({ search: searchQuery });

	const onFocus: FocusEventHandler<HTMLInputElement> = focus => {
		focus.currentTarget.select();
	};

	const onChange: ChangeEventHandler<HTMLInputElement> = change => {
		setSearchQueryLocal(change.currentTarget.value);
	};

	useDebounce({
		cb() {
			recipesStore.searchQuery = searchQueryLocal;
		},
		delay: 200
	});

	return (
		<Styled.Search
			placeholder='Find a Recipe...'
			value={searchQueryLocal}
			onChange={onChange}
			onFocus={onFocus}
		/>
	);
});
