import { useEffect, type ChangeEventHandler, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { type PreparationStep } from '@cooke/types';
import { wizardValidator } from '@cooke/stores/wizard-store';

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

export const Step = observer((props: StepProps) => {
	const _ref = useRef<HTMLDivElement>(null);
	const { step, isLastStep, isFirstStep, add, deleteStep, swap, changeDescription } =
		props;

	const isDescriptionValid =
		wizardValidator.stepsValidation().getInputValidator(step.id)?.isValid ?? true;
	const isDescriptionTouched =
		wizardValidator.stepsValidation().getInputValidator(step.id)?.isTouched ?? false;

	const onChangeDescriptionHandler: ChangeEventHandler<HTMLTextAreaElement> = change => {
		wizardValidator
			.stepsValidation()
			.getInputValidator(step.id)
			.runValidation(change.currentTarget.value);
		changeDescription(change);
	};

	const onDeleteHandler = () => {
		deleteStep();
		wizardValidator.stepsValidation().deleteInputValidation(step.id);
	};

	const markAsTouched = () => {
		wizardValidator.stepsValidation().markAsTouched(step.id);
	};

	useEffect(() => {
		wizardValidator.stepsValidation().addSimpleValidation(step.id);
		_ref.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
	}, []);

	return (
		<Styled.Step ref={_ref}>
			<Styled.Header>
				<Styled.StepCount>Step {step.stepCount}</Styled.StepCount>
				<Styled.Controls>
					<Styled.ControlButton onClick={add}>Add</Styled.ControlButton>
					<Styled.ControlButton variant='secondary' onClick={onDeleteHandler}>
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
				isValid={isDescriptionValid || !isDescriptionTouched}
				onChange={onChangeDescriptionHandler}
				onBlur={markAsTouched}
				placeholder={
					isDescriptionTouched ? 'Description is required...' : 'Description...'
				}
			/>
		</Styled.Step>
	);
});
