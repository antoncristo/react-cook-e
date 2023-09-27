import { type ChangeEventHandler } from 'react';
import { type PreparationStep } from '@cooke/types';

import * as Styled from './step.styled';

interface StepProps {
	step: PreparationStep;
	isFirstStep: boolean;
	isLastStep: boolean;
	add: () => void;
	deleteStep: () => void;
	swap: (direction: 'up' | 'down') => void;
	changeDescription: ChangeEventHandler<HTMLTextAreaElement>;
}

export const Step = (props: StepProps) => {
	const { step, isLastStep, isFirstStep, add, deleteStep, swap, changeDescription } =
		props;

	return (
		<Styled.Step>
			<Styled.Header>
				<Styled.StepCount>Step {step.stepCount}</Styled.StepCount>
				<Styled.Controls>
					<Styled.ControlButton onClick={add}>Add</Styled.ControlButton>
					<Styled.ControlButton variant='secondary' onClick={deleteStep}>
						Delete
					</Styled.ControlButton>
					<Styled.ControlButton
						disabled={isFirstStep}
						onClick={() => {
							swap('up');
						}}
					>
						Up
					</Styled.ControlButton>
					<Styled.ControlButton
						onClick={() => {
							swap('down');
						}}
						disabled={isLastStep}
					>
						Down
					</Styled.ControlButton>
				</Styled.Controls>
			</Styled.Header>
			<Styled.DescriptionInput
				value={step.description}
				onChange={changeDescription}
				placeholder='Description...'
			/>
		</Styled.Step>
	);
};
