import { type ChangeEventHandler } from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { wizardStore, wizardValidator } from '@cooke/stores/wizard-store';

import * as Styled from './dish-description.styled';

export const DishDescription = observer(() => {
	const { t } = useTranslation('wizard');
	const { description } = wizardStore;
	const { descriptionValidation } = wizardValidator;

	const onChange: ChangeEventHandler<HTMLTextAreaElement> = change => {
		descriptionValidation.runValidation(change.currentTarget.value);
		wizardStore.description = change.currentTarget.value;
	};

	const onTouchHandler = () => {
		descriptionValidation.isTouched = true;
	};

	return (
		<Styled.DishDescription
			isValid={descriptionValidation.isValid || !descriptionValidation.isTouched}
			value={description}
			onChange={onChange}
			onBlur={onTouchHandler}
			placeholder={
				descriptionValidation.isTouched ? t('descriptionInvalid') : t('description')
			}
		/>
	);
});
