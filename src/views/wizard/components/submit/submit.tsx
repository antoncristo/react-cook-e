import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Button, Loader } from '@cooke/shared';
import { wizardStore, wizardValidator } from '@cooke/stores/wizard-store';
import { usePostRecipe, usePutRecipe } from '@cooke/api/recipe';
import { cookePathnames } from '@cooke/router';
import { alertStore } from '@cooke/stores/alert-store';
import { useEffect } from 'react';
import { confirmationHandler } from '@cooke/utils';

export const Submit = observer(() => {
	const { recipe, isEditMode } = wizardStore;
	const { postRecipe, isPostLoading, isPostSuccess } = usePostRecipe();
	const { putRecipe, isPutLoading, isPutSuccess } = usePutRecipe();
	const navigate = useNavigate();

	const onSubmit = () => {
		if (wizardValidator.isRecipeValid()) {
			if (isEditMode) {
				putRecipe(recipe);
			} else {
				postRecipe(recipe);
			}
		} else {
			wizardValidator.touchAll();
			confirmationHandler({
				msg: 'Please fill correctly all the highlighted/missing fields'
			});
		}
	};

	useEffect(() => {
		if (isPostSuccess || isPutSuccess) {
			navigate(cookePathnames.authenticatedPathNames.DASHBOARD);
		}
	}, [isPostSuccess, isPutSuccess]);

	return (
		<Button width='100%' onClick={onSubmit}>
			{isPostLoading || isPutLoading ? (
				<Loader size='S' />
			) : (
				<b>{isEditMode ? 'UPDATE' : 'SUBMIT'}</b>
			)}
		</Button>
	);
});
