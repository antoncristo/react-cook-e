import { TextArea } from '@cooke/shared';

import * as Styled from './wizard.styled';

export const Wizard = () => (
	<Styled.Wizard>
		<Styled.WizardFlex>
			<Styled.WizardTitle>What`s Cook-E ?</Styled.WizardTitle>
			<Styled.WizardTitleInput placeholder='Dish name...' />
			<Styled.WIzardDescriptionInput placeholder='Description...' />
		</Styled.WizardFlex>
	</Styled.Wizard>
);
