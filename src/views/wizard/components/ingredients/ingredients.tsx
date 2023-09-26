import { type Recipe } from '@cooke/types';

import { Ingredient } from './components';

import * as Styled from './ingredients.styled';

interface IngredientsProps {
	recipe: Recipe;
}

export const Ingredients = (props: IngredientsProps) => {
	const { recipe } = props;

	return (
		<Styled.Ingredients>
			<Styled.Header>
				<Styled.IngredientsTitle>INGREDIENTS</Styled.IngredientsTitle>
				<Styled.ControlButton>Add</Styled.ControlButton>
			</Styled.Header>
			{recipe.ingredients.map((ingredient, index) => (
				<Ingredient recipe={recipe} ingredientIndex={index} key={ingredient.id} />
			))}
		</Styled.Ingredients>
	);
};
