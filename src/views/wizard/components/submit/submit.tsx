import { observer } from 'mobx-react-lite';
import { Button } from '@cooke/shared';
import { wizardStore } from '@cooke/stores/wizard-store';
import { wizardValidator } from '@cooke/stores/wizard-validator';

export const Submit = observer(() => {
	const { recipe } = wizardStore;

	const onSubmit = () => {
		// eslint-disable-next-line
		if (!wizardValidator.isRecipeValid()) {
			wizardValidator.touchAll();
			// eslint-disable-next-line
			alert('Please fill correctly all the highlighted/missing fields');
		} else {
			// eslint-disable-next-line
			alert('POST SUBMIT');
		}
	};

	return <Button onClick={onSubmit}>SUBMIT</Button>;
});
