import { observer } from 'mobx-react-lite';
import { Button } from '@cooke/shared';
import { wizardStore } from '@cooke/stores/wizard-store';

export const Submit = observer(() => {
	const { recipe } = wizardStore;

	const onSubmit = () => {
		// eslint-disable-next-line
		console.log(recipe);
	};

	return <Button onClick={onSubmit}>SUBMIT</Button>;
});
