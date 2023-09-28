import { type ChangeEventHandler } from 'react';
import { observer } from 'mobx-react-lite';
import { wizardStore } from '@cooke/stores/wizard-store';

import * as Styled from './dish-name.styled';

export const DishName = observer(() => {
	const { title } = wizardStore;

	const onChangeHandler: ChangeEventHandler<HTMLInputElement> = change => {
		wizardStore.title = change.currentTarget.value;
	};

	return (
		<Styled.DishNameInput
			onChange={onChangeHandler}
			value={title}
			placeholder='Dish name...'
		/>
	);
});
