import { Text } from '@cooke/shared';
import { BookPageIcon } from '@cooke/assets';
import { type Recipe } from '@cooke/types';
import { cookePathnames, injectRecipeUUID } from '@cooke/router';

import * as Styled from './match-item.styled';

interface MatchItemProps {
	recipe: Recipe;
}

export const MatchItem = (props: MatchItemProps) => {
	const { recipe } = props;

	return (
		<Styled.MatchItem>
			<Styled.MatchItemLink
				to={injectRecipeUUID(
					cookePathnames.authenticatedPathNames.READ_RECIPE,
					recipe.id
				)}
			>
				<Text text={recipe.title} numberOfLines={1} />
				<BookPageIcon />
			</Styled.MatchItemLink>
		</Styled.MatchItem>
	);
};
