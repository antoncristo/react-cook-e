import { type Recipe } from '@cooke/types';

import * as Styled from './dashboard.styled';
import { RecipeCard } from './components';

// Fix: move mock to recipe service response

const recipes: Recipe[] = [
	{
		id: crypto.randomUUID(),
		title: 'Shnitzel overflowing text test overflowing text test overflowing text test',
		description:
			'Deep fried chicken breasts overflowing\n text test overflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text test',
		ingredients: [
			{
				name: 'Oil',
				amount: 1,
				unit: 'l'
			},
			{
				name: 'Chicken breast',
				amount: 1,
				unit: 'kg'
			},
			{
				name: 'Egg',
				amount: 1,
				unit: 'unit'
			},
			{
				name: 'Breadcrumbs',
				amount: 1,
				unit: 'unit'
			},
			{
				name: 'Mustard',
				amount: 60,
				unit: 'g'
			}
		],
		steps: [
			{
				stepCount: 1,
				description: 'Cut the chicken breast into small semi flat square pieces'
			},
			{
				stepCount: 2,
				description:
					'Soak the cubes in a mix of mustard,mayo,salt,pepper and eggs for ~1h'
			},
			{
				stepCount: 3,
				description:
					'Prepare a breadcrumbs mix: breadcrumbs, chicken soup powder, smoked paprika, garlic powder'
			},
			{
				stepCount: 4,
				description: 'Coat the soaked cubes with the breadcrumbs mix and cool for ~30mins'
			},
			{
				stepCount: 5,
				description: 'Deep fry until golden'
			}
		]
	},
	{
		id: crypto.randomUUID(),
		title: 'Bologniez',
		description: 'Spaghetti with beef and tomato sauce overflowing text test',
		ingredients: [
			{
				amount: 1,
				name: 'Beaf',
				unit: 'kg'
			}
		],
		steps: [
			{
				description: 'Make it',
				stepCount: 1
			}
		]
	}
];

export const Dashboard = () => (
	<Styled.Dashboard>
		<Styled.TopBar>search</Styled.TopBar>
		<Styled.RecipesFlex>
			{recipes.map(recipe => (
				<RecipeCard key={recipe.id} recipe={recipe} />
			))}
		</Styled.RecipesFlex>
	</Styled.Dashboard>
);
