import { type Recipe } from '@cooke/types';

import * as Styled from './preparation-steps.styled';
import { Step } from './components';

interface PreparationStepsProps {
	recipe: Recipe;
}

export const PreparationSteps = (props: PreparationStepsProps) => {
	const { recipe } = props;

	return (
		<Styled.PreparationSteps>
			<Styled.Header>
				<Styled.PreparationStepsTitle>PREPARATION STEPS</Styled.PreparationStepsTitle>
				<Styled.ControlButton>Add</Styled.ControlButton>
			</Styled.Header>
			{recipe.steps.map((step, index) => (
				<Step key={step.stepCount} recipe={recipe} stepIndex={index} />
			))}
		</Styled.PreparationSteps>
	);
};
