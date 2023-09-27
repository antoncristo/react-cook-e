import { type Recipe } from '@cooke/types';

import { Ingredients, Steps } from './components';

import * as Styled from './read-recipe.styled';

const recipe: Recipe = {
	id: crypto.randomUUID(),
	title:
		'Shnitzel overflowing text overflowing text overflowing text test overflowing text test',
	description:
		'Deep fried chicken breasts overflowing\n text test overflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text test',
	ingredients: [
		{
			id: '1-1-1-1',
			name: 'Oil',
			amount: 1,
			unit: 'l'
		},
		{
			id: '1-1-1-2',
			name: 'Chicken breast',
			amount: 1,
			unit: 'kg'
		},
		{
			id: '1-1-1-3',
			name: 'Egg',
			amount: 1,
			unit: 'unit'
		},
		{
			id: '1-1-1-4',
			name: 'Breadcrumbs',
			amount: 1,
			unit: 'unit'
		},
		{
			id: '1-1-1-5',
			name: 'Mustard',
			amount: 60,
			unit: 'g'
		}
	],
	steps: [
		{
			id: '1-1-1-1',
			stepCount: 1,
			description:
				'Cut the chicken breast into small semi flat square piecesCut the chicken breast into small semi flat square piecesCut the chicken breast into small semi flat square piecesCut the chicken breast into small semi flat square piecesCut the chicken breast into small semi flat square piecesCut the chicken breast into small semi flat square piecesCut the chicken breast into small semi flat square piecesCut the chicken breast into small semi flat square pieces'
		},
		{
			id: '1-1-1-2',
			stepCount: 2,
			description: 'Soak the cubes in a mix of mustard,mayo,salt,pepper and eggs for ~1h'
		},
		{
			id: '1-1-1-3',
			stepCount: 3,
			description:
				'Prepare a breadcrumbs mix: breadcrumbs, chicken soup powder, smoked paprika, garlic powder'
		},
		{
			id: '1-1-1-4',
			stepCount: 4,
			description: 'Coat the soaked cubes with the breadcrumbs mix and cool for ~30mins'
		},
		{
			id: '1-1-1-5',
			stepCount: 5,
			description: 'Deep fry until golden'
		}
	]
};

export const ReadRecipe = () => (
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
