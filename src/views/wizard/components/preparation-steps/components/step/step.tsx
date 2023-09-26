import { type Recipe } from '@cooke/types';

import * as Styled from './step.styled';

interface StepProps {
	recipe: Recipe;
	stepIndex: number;
}

export const Step = (props: StepProps) => {
	const { recipe, stepIndex } = props;
	const _step = recipe.steps[stepIndex];

	return (
		<Styled.Step>
			<Styled.Header>
				<Styled.StepCount>Step {_step.stepCount}</Styled.StepCount>
				<Styled.Controls>
					<Styled.ControlButton>Add</Styled.ControlButton>
					<Styled.ControlButton variant='secondary'>Delete</Styled.ControlButton>
					<Styled.ControlButton disabled={stepIndex === 0}>Up</Styled.ControlButton>
					<Styled.ControlButton disabled={stepIndex === recipe.steps.length - 1}>
						Down
					</Styled.ControlButton>
				</Styled.Controls>
			</Styled.Header>
			<Styled.DescriptionInput placeholder='Description...' />
		</Styled.Step>
	);
};
