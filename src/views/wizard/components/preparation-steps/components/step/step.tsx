import { useEffect, type ChangeEventHandler, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { type PreparationStep } from '@cooke/types';
import { wizardValidator } from '@cooke/stores/wizard-store';

import * as Styled from './step.styled';
import { useTranslation } from 'react-i18next';

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
	const { t } = useTranslation('wizard', { keyPrefix: 'preparationSteps' });
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
		_ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		(document.querySelector(`[data-id="${step.id}"]`)! as HTMLElement)?.focus();
	}, []);

	return (
		<Styled.Step ref={_ref}>
			<Styled.Header>
				<Styled.StepCount>
					{t('step')} {step.stepCount}
				</Styled.StepCount>
				<Styled.Controls>
					<Styled.ControlButton onClick={add}>{t('buttons.add')}</Styled.ControlButton>
					<Styled.ControlButton variant='secondary' onClick={onDeleteHandler}>
						{t('buttons.delete')}
					</Styled.ControlButton>
					<Styled.ControlButton
						disabled={isFirstStep}
						onClick={() => {
							swap('up');
						}}
					>
						{t('buttons.moveUp')}
					</Styled.ControlButton>
					<Styled.ControlButton
						onClick={() => {
							swap('down');
						}}
						disabled={isLastStep}
					>
						{t('buttons.moveDown')}
					</Styled.ControlButton>
				</Styled.Controls>
			</Styled.Header>
			<Styled.DescriptionInput
				data-id={step.id}
				value={step.description}
				isValid={isDescriptionValid || !isDescriptionTouched}
				onChange={onChangeDescriptionHandler}
				onBlur={markAsTouched}
				placeholder={isDescriptionTouched ? t('descriptionInvalid') : t('description')}
			/>
		</Styled.Step>
	);
});
