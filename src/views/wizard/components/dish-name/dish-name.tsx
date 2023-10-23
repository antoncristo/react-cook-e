import { type ChangeEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { wizardStore, wizardValidator } from '@cooke/stores/wizard-store';

import * as Styled from './dish-name.styled';

export const DishName = observer(() => {
	const { t } = useTranslation('wizard');
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
			placeholder={titleValidation.isTouched ? t('dishNameInvalid') : t('dishName')}
		/>
	);
});
