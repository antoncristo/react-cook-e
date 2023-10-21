import { Loader } from '@cooke/shared';
import * as Styled from './initial-state.styled';
import { cookePathnames } from '@cooke/router';
import { useTranslation } from 'react-i18next';

export const InitialState = () => {
	const { t } = useTranslation('dashboard');
	return (
		<Styled.InitialState>
			<Loader size='M' />
			<Styled.LinkButton to={cookePathnames.authenticatedPathNames.CREATE_RECIPE}>
				{t('initialState')}
			</Styled.LinkButton>
			<Loader size='M' />
		</Styled.InitialState>
	);
};
