import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { recipesStore } from '@cooke/stores/recipes-store';
import { NetworkError } from '@cooke/shared';

import { Ingredients, Steps } from './components';

import * as Styled from './read-recipe.styled';

export const ReadRecipe = observer(() => {
	const params = useParams() as Record<'recipeid', UUID>;
	const recipe = recipesStore.getRecipe(params.recipeid);

	if (!recipe) {
		return (
			<Styled.ReadRecipe>
				<NetworkError />
			</Styled.ReadRecipe>
		);
	}

	return (
		<Styled.ReadRecipe>
			<Styled.RecipeFlex>
				<Styled.RecipeTitle
					title={recipe.title}
					numberOfLines={1}
					fontSize='2.5rem'
					text={recipe.title}
				/>
				<Styled.RecipeDescription>{recipe.description}</Styled.RecipeDescription>
				<Ingredients recipe={recipe} />
				<Steps recipe={recipe} />
				<Styled.RecipeFooter>Bon Appetito!</Styled.RecipeFooter>
			</Styled.RecipeFlex>
		</Styled.ReadRecipe>
	);
});
