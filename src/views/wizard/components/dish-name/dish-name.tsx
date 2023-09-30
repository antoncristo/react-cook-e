import { type ChangeEventHandler } from 'react';
import { observer } from 'mobx-react-lite';
import { wizardStore } from '@cooke/stores/wizard-store';

import * as Styled from './dish-name.styled';
import { wizardValidator } from '@cooke/stores/wizard-validator';

export const DishName = observer(() => {
	const { title } = wizardStore;
	const { titleValidation } = wizardValidator;

	const onChangeHandler: ChangeEventHandler<HTMLInputElement> = change => {
		titleValidation.runValidation(change.currentTarget.value);
		wizardStore.title = change.currentTarget.value;
	};

	const onTouchHandler = () => {
		titleValidation.isTouched = true;
	};

	return (
		<Styled.DishNameInput
			isValid={titleValidation.isValid || !titleValidation.isTouched}
			onChange={onChangeHandler}
			onBlur={onTouchHandler}
			value={title}
			placeholder={
				titleValidation.isTouched ? 'Dish name is required...' : 'Dish name...'
			}
		/>
	);
});
