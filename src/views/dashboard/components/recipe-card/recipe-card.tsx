import { type Recipe } from '@cooke/types';
import { Text } from '@cooke/shared';

import { CardMask } from './components';

import * as Styled from './recipe-card.styled';

interface RecipeCardProps {
	recipe: Recipe;
	deleteRecipe: (recipe: Recipe) => void;
}

export const RecipeCard = (props: RecipeCardProps) => {
	const { recipe, deleteRecipe } = props;

	const deleteHandler = () => {
		deleteRecipe(recipe);
	};

	return (
		<Styled.RecipeCard tabIndex={0}>
			<CardMask deleteRecipe={deleteHandler} recipe={recipe} />
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
					<span>{recipe.steps.length}</span> Steps
				</div>
				<div>
					<span>{recipe.ingredients.length}</span> Ingredients
				</div>
			</Styled.Stats>
			<Styled.RecipeDescription>
				<Text
					title={recipe.description}
					fontSize='1.4rem'
					numberOfLines={7}
					text={recipe.description}
				/>
			</Styled.RecipeDescription>
		</Styled.RecipeCard>
	);
};
