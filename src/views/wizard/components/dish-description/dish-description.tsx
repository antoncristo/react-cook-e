import { type ChangeEventHandler } from 'react';
import { observer } from '@legendapp/state/react';
import { wizardStore } from '@cooke/stores/wizard-store';

import * as Styled from './dish-description.styled';

export const DishDescription = observer(() => {
	const { description } = wizardStore;

	const onChange: ChangeEventHandler<HTMLTextAreaElement> = change => {
		wizardStore.description = change.currentTarget.value;
	};

	return (
		<Styled.DishDescription
			value={description}
			onChange={onChange}
			placeholder='Description...'
		/>
	);
});
