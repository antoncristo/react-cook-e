import { type Recipe } from '@cooke/types';
import { Text } from '@cooke/shared';

import * as Styled from './steps.styled';
import { useTranslation } from 'react-i18next';

interface StepsProps {
	recipe: Recipe;
}

export const Steps = (props: StepsProps) => {
	const { t } = useTranslation('recipe');
	const { recipe } = props;

	return (
		<Styled.Steps>
			<Styled.StepsTitle text={t('steps')} fontSize='2.3rem' />
			<Styled.StepsList>
				{recipe.steps.map(step => (
					<Styled.StepsItem key={step.id}>
						<div># {step.stepCount}</div>
						<p>{step.description}</p>
					</Styled.StepsItem>
				))}
			</Styled.StepsList>
		</Styled.Steps>
	);
};
