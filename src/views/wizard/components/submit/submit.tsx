import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Button } from '@cooke/shared';
import { wizardStore, wizardValidator } from '@cooke/stores/wizard-store';
import { usePostRecipe, usePutRecipe } from '@cooke/api/recipe';
import { cookePathnames } from '@cooke/router';

export const Submit = observer(() => {
	const { recipe, isEditMode } = wizardStore;
	const { postRecipe } = usePostRecipe();
	const { putRecipe } = usePutRecipe();
	const navigate = useNavigate();

	const onSubmit = () => {
		if (wizardValidator.isRecipeValid()) {
			if (isEditMode) {
				putRecipe(recipe);
			} else {
				postRecipe(recipe);
			}

			navigate(cookePathnames.authenticatedPathNames.DASHBOARD);
		} else {
			wizardValidator.touchAll();
			// eslint-disable-next-line
			alert('Please fill correctly all the highlighted/missing fields');
		}
	};

	return <Button onClick={onSubmit}>{isEditMode ? 'UPDATE' : 'SUBMIT'}</Button>;
});
