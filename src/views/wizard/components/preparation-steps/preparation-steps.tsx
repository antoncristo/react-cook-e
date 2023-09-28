import { type ChangeEventHandler } from 'react';
import { observer } from 'mobx-react-lite';
import { wizardStore } from '@cooke/stores/wizard-store';

import { Step } from './components';

import * as Styled from './preparation-steps.styled';

export const PreparationSteps = observer(() => {
	const { steps } = wizardStore;

	const addStep = () => {
		wizardStore.addStep();
	};

	const addStepBelow = (pusherIndex: number) => {
		wizardStore.addStepBelow(pusherIndex);
	};

	const deleteStep = (indexToDelete: number) => {
		wizardStore.deleteStep(indexToDelete);
	};

	const swapSteps = (swapperIndex: number) => (direction: 'up' | 'down') => {
		wizardStore.swapSteps(swapperIndex, direction);
	};

	const changeDescription =
		(index: number): ChangeEventHandler<HTMLTextAreaElement> =>
		change => {
			wizardStore.changeStepDescription(index, change.currentTarget.value);
		};

	return (
		<Styled.PreparationSteps>
			<Styled.Header>
				<Styled.PreparationStepsTitle>PREPARATION STEPS</Styled.PreparationStepsTitle>
				<Styled.ControlButton onClick={addStep}>Add</Styled.ControlButton>
			</Styled.Header>
			{steps.map((step, index) => (
				<Step
					key={step.id}
					step={step}
					isFirstStep={index === 0}
					isLastStep={index === steps.length - 1}
					add={() => {
						addStepBelow(index);
					}}
					deleteStep={() => {
						deleteStep(index);
					}}
					swap={swapSteps(index)}
					changeDescription={changeDescription(index)}
				/>
			))}
		</Styled.PreparationSteps>
	);
});
