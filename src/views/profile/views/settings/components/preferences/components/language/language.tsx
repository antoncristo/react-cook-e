import { type ChangeEventHandler } from 'react';
import { Label, Option, Select } from '@cooke/shared';
import { cookeTheme } from '@cooke/style';

import * as Styled from './language.styled';

interface LanguageProps {
	currentLng: CookeLanguages;
	isEditMode: boolean;
	onChange: ChangeEventHandler<HTMLSelectElement>;
}

export const Language = (props: LanguageProps) => {
	const { currentLng, onChange, isEditMode } = props;
	const options: CookeLanguages[] = ['en', 'ru'];

	return (
		<Styled.Language>
			<Label htmlFor='lng' text='Language :' fontSize='1.4rem' />
			{isEditMode ? (
				<Select onChange={onChange} id='lng'>
					{options.map(op => (
						<Option key={op} selected={currentLng === op} label={op} value={op} />
					))}
				</Select>
			) : (
				<Label
					text={currentLng}
					fontSize='1.8rem'
					style={{ color: `rgba(${cookeTheme.colors.primary})`, fontWeight: 'bold' }}
				/>
			)}
		</Styled.Language>
	);
};
