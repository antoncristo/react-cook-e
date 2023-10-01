import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Button } from '@cooke/shared';
import { wizardStore } from '@cooke/stores/wizard-store';
import { wizardValidator } from '@cooke/stores/wizard-validator';
import { usePostRecipe } from '@cooke/api/recipe';
import { cookePathnames } from '@cooke/router';

export const Submit = observer(() => {
	const { recipe } = wizardStore;
	const { postRecipe, isError } = usePostRecipe();
	const navigate = useNavigate();

	const onSubmit = () => {
		// eslint-disable-next-line
		if (!wizardValidator.isRecipeValid()) {
			wizardValidator.touchAll();
			// eslint-disable-next-line
			alert('Please fill correctly all the highlighted/missing fields');
		} else {
			postRecipe(recipe);
			navigate(cookePathnames.authenticatedPathNames.DASHBOARD);
		}
	};

	return <Button onClick={onSubmit}>SUBMIT</Button>;
});
