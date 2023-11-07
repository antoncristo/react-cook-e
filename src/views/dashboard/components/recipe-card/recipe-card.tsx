import { useTranslation } from 'react-i18next';
import { type Recipe } from '@cooke/types';
import { Text } from '@cooke/shared';
import { useDeleteRecipe, usePostRecipe } from '@cooke/api/recipe';
import { confirmationHandler } from '@cooke/utils';

import { CardMask } from './components';

import * as Styled from './recipe-card.styled';

interface RecipeCardProps {
	recipe: Recipe;
}

export const RecipeCard = (props: RecipeCardProps) => {
	const { t } = useTranslation(['dashboard', 'alerts']);
	const { recipe } = props;
	const { deleteRecipe } = useDeleteRecipe();
	const { postRecipe } = usePostRecipe();

	const deleteHandler = () => {
		confirmationHandler({
			msg: t('alerts:confirmations.confirmRecipeDelete', { title: recipe.title }),
			cb() {
				deleteRecipe(recipe);
			}
		});
	};

	const copyHandler = () => {
		const recipeCopy = JSON.parse(JSON.stringify(recipe)) as Recipe;
		recipeCopy.id = crypto.randomUUID();
		recipeCopy.title = `${recipe.title} - copy`;

		confirmationHandler({
			msg: t('alerts:confirmations.confirmRecipeCopy', { title: recipeCopy.title }),
			cb() {
				postRecipe(recipeCopy);
			}
		});
	};

	return (
		<Styled.RecipeCard tabIndex={0}>
			<CardMask
				handlers={{ deleteRecipe: deleteHandler, copyRecipe: copyHandler }}
				recipe={recipe}
			/>
			<Styled.RecipeTitle>
				<Text
					title={recipe.title}
					fontSize='1.8rem'
					numberOfLines={2}
					text={recipe.title}
				/>
			</Styled.RecipeTitle>
			<Styled.Stats>
				<div>
					{t('dashboard:recipeCard.steps')}: <span>{recipe.steps.length}</span>
				</div>
				<div>
					{t('dashboard:recipeCard.ingredients')}:{' '}
					<span>{recipe.ingredients.length}</span>
				</div>
			</Styled.Stats>
			<Styled.RecipeDescription>
				<Text
					title={recipe.description}
					fontSize='1.4rem'
					numberOfLines={8}
					text={recipe.description}
				/>
			</Styled.RecipeDescription>
		</Styled.RecipeCard>
	);
};
