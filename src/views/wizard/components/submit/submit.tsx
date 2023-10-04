import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Button } from '@cooke/shared';
import { wizardStore, wizardValidator } from '@cooke/stores/wizard-store';
import { usePostRecipe, usePutRecipe } from '@cooke/api/recipe';
import { cookePathnames } from '@cooke/router';
import { alertStore } from '@cooke/stores/alert-store';

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
			alertStore.setAlert({
				msg: 'Please fill correctly all the highlighted/missing fields'
			});
		}
	};

	return (
		<Button width='100%' onClick={onSubmit}>
			<b>{isEditMode ? 'UPDATE' : 'SUBMIT'}</b>
		</Button>
	);
});
