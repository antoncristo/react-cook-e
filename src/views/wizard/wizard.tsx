import { DishDescription, DishName, Ingredients, PreparationSteps } from './components';

import * as Styled from './wizard.styled';

export const Wizard = () => (
	<Styled.Wizard>
		<Styled.WizardFlex>
			<Styled.WizardTitle>What`s Cook-E ?</Styled.WizardTitle>
			<DishName />
			<DishDescription />
			<Ingredients />
			<PreparationSteps />
		</Styled.WizardFlex>
	</Styled.Wizard>
);
