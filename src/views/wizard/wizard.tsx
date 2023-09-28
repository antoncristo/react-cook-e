import {
	DishDescription,
	DishName,
	Ingredients,
	PreparationSteps,
	Submit
} from './components';

import * as Styled from './wizard.styled';

export const Wizard = () => (
	<Styled.Wizard>
		<Styled.WizardFlex>
			<Styled.WizardTitle>What`s Cook-E ?</Styled.WizardTitle>
			<DishName />
			<DishDescription />
			<Ingredients />
			<PreparationSteps />
			<Submit />
		</Styled.WizardFlex>
	</Styled.Wizard>
);
