import { useParams } from 'react-router-dom';
import { useGetRecipe } from '@cooke/api/recipe';

import { Ingredients, Steps } from './components';

import * as Styled from './read-recipe.styled';

export const ReadRecipe = () => {
	const params = useParams() as Record<'recipeid', UUID>;
	const { recipe, isError, isLoading } = useGetRecipe({ recipeID: params.recipeid });

	if (isError || !recipe) {
		// Fix: https://trello.com/c/u9WwNHFK/18-add-loader-and-error
		return (
			<Styled.ReadRecipe>
				<div>Error...</div>
			</Styled.ReadRecipe>
		);
	}

	if (isLoading) {
		// Fix: https://trello.com/c/u9WwNHFK/18-add-loader-and-error
		return (
			<Styled.ReadRecipe>
				<div>Loading...</div>
			</Styled.ReadRecipe>
		);
	}

	return (
		<Styled.ReadRecipe>
			<Styled.RecipeFlex>
				<Styled.RecipeTitle numberOfLines={1} fontSize='2.5rem' text={recipe.title} />
				<Styled.RecipeDescription
					numberOfLines={6}
					fontSize='1.6rem'
					text={recipe.description}
				/>
				<Ingredients recipe={recipe} />
				<Steps recipe={recipe} />
				<Styled.RecipeFooter>Bon Appetito!</Styled.RecipeFooter>
			</Styled.RecipeFlex>
		</Styled.ReadRecipe>
	);
};
