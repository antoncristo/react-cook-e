import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Button, Loader } from '@cooke/shared';
import { wizardStore, wizardValidator } from '@cooke/stores/wizard-store';
import { usePostRecipe, usePutRecipe } from '@cooke/api/recipe';
import { cookePathnames } from '@cooke/router';
import { useEffect } from 'react';
import { confirmationHandler } from '@cooke/utils';
import { useTranslation } from 'react-i18next';

export const Submit = observer(() => {
	const { t } = useTranslation('wizard');
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
				msg: `
				Dish Name is REQUIRED
				Description is REQUIRED 
				Ingredients are REQUIRED
				Preparation Steps are REQUIRED`
			});
		}
	};

	useEffect(() => {
		if (isPostSuccess || isPutSuccess) {
			navigate(cookePathnames.authenticatedPathNames.DASHBOARD);
		}
	}, [isPostSuccess, isPutSuccess]);

	return (
		<Button variant='secondary' width='100%' onClick={onSubmit}>
			{isPostLoading || isPutLoading ? (
				<Loader size='S' />
			) : (
				<b>{isEditMode ? t('update') : t('submit')}</b>
			)}
		</Button>
	);
});
