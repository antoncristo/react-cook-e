import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { recipesStore } from '@cooke/stores/recipes-store';
import { useGetRecipe } from '@cooke/api/recipe';
import { type Recipe } from '@cooke/types';
import { Button, Loader, NetworkError } from '@cooke/shared';
import { PrintIcon } from '@cooke/assets';

import { Ingredients, Steps } from './components';

import * as Styled from './read-recipe.styled';

export const ReadRecipe = observer(() => {
	const params = useParams() as Record<'recipeid', UUID>;
	const storeRecipe = recipesStore.getRecipe(params.recipeid);
	const {
		isError,
		isPending,
		recipe: fetchedRecipe
	} = useGetRecipe({ enabled: !storeRecipe, recipeId: params.recipeid });

	const recipe = (storeRecipe ?? fetchedRecipe)! as Recipe;

	const onPrint = () => {
		window.print();
	};

	if (isError) {
		return (
			<Styled.ReadRecipe>
				<NetworkError />
			</Styled.ReadRecipe>
		);
	}

	if (isPending) {
		return <Loader size='L' />;
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
				<Button className='control' onClick={onPrint} variant='secondary'>
					<PrintIcon width={22} height={22} right='1rem' />
					Print
				</Button>
				<Styled.RecipeDescription>{recipe.description}</Styled.RecipeDescription>
				<Ingredients recipe={recipe} />
				<Steps recipe={recipe} />
				<Styled.RecipeFooter>Bon Appetito!</Styled.RecipeFooter>
			</Styled.RecipeFlex>
		</Styled.ReadRecipe>
	);
});
