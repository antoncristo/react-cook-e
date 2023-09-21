import { type Recipe } from '@cooke/types';

import * as Styled from './recipe-card.styled';

interface RecipeCardProps {
	recipe: Recipe;
}

export const RecipeCard = (props: RecipeCardProps) => {
	const { recipe } = props;

	return <Styled.RecipeCard tabIndex={0}>{recipe.title}</Styled.RecipeCard>;
};
