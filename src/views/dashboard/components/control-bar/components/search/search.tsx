import {
	type FocusEventHandler,
	type ChangeEventHandler,
	useState,
	useEffect
} from 'react';
import { observer } from 'mobx-react-lite';
import { useGetRecipes } from '@cooke/api/recipe';
import { recipesStore } from '@cooke/stores/recipes-store';
import { useDebounce } from '@cooke/hooks';

import * as Styled from './search.styled';
import { useTranslation } from 'react-i18next';

export const Search = observer(() => {
	const { t } = useTranslation('dashboard', { keyPrefix: 'controls' });
	const { searchQuery } = recipesStore;
	const [searchQueryLocal, setSearchQueryLocal] = useState('');

	const { isRecipesSuccess, fetchedRecipes } = useGetRecipes({ search: searchQuery });

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

	useEffect(() => {
		if (isRecipesSuccess) {
			recipesStore.recipes = fetchedRecipes;
		}
	}, [isRecipesSuccess]);

	return (
		<Styled.Search
			placeholder={t('search')}
			value={searchQueryLocal}
			onChange={onChange}
			onFocus={onFocus}
		/>
	);
});
