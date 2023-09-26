import { type Recipe } from '@cooke/types';
import { Text } from '@cooke/shared';

import * as Styled from './steps.styled';

interface StepsProps {
	recipe: Recipe;
}

export const Steps = (props: StepsProps) => {
	const { recipe } = props;

	return (
		<Styled.Steps>
			<Styled.StepsTitle text='What and How?' fontSize='2rem' />
			<Styled.StepsList>
				{recipe.steps.map(step => (
					<Styled.StepsItem key={step.stepCount}>
						<div>STEP {step.stepCount}</div>
						<p>{step.description}</p>
					</Styled.StepsItem>
				))}
			</Styled.StepsList>
		</Styled.Steps>
	);
};
