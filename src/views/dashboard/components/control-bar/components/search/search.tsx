import { useTranslation } from 'react-i18next';
import { type FocusEventHandler, type ChangeEventHandler, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { recipesStore } from '@cooke/stores/recipes-store';
import { useDebounce } from '@cooke/hooks';

import { RecipesMatch } from '../recipes-match/recipes-match';

import * as Styled from './search.styled';

export const Search = observer(() => {
	const { t } = useTranslation('dashboard', { keyPrefix: 'controls' });
	const [searchQueryLocal, setSearchQueryLocal] = useState('');

	const onFocus: FocusEventHandler<HTMLInputElement> = focus => {
		focus.currentTarget.select();
	};

	const onChange: ChangeEventHandler<HTMLInputElement> = change => {
		setSearchQueryLocal(change.currentTarget.value);
	};

	const onReset = () => {
		setSearchQueryLocal('');
	};

	useDebounce({
		cb() {
			recipesStore.searchQuery = searchQueryLocal;
		},
		delay: 200
	});

	return (
		<Styled.RelativeContainer>
			<Styled.Search
				placeholder={t('search')}
				value={searchQueryLocal}
				onChange={onChange}
				onFocus={onFocus}
			/>
			{searchQueryLocal ? <RecipesMatch resetSearch={onReset} /> : null}
		</Styled.RelativeContainer>
	);
});
