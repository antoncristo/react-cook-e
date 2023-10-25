import { Init } from '@cooke/init';
import { useTranslation } from 'react-i18next';

import * as Styled from './not-found.styled';

export const NotFound = () => {
	const { t } = useTranslation('errors', { keyPrefix: 'pageNotFound' });

	return (
		<Init>
			<Styled.NotFound>
				<Styled.FourOFour maxWidth='fit-content' text='404' fontSize='10rem' />
				<Styled.FourOFour maxWidth='fit-content' text={t('text')} fontSize='4rem' />
				<Styled.FourOFour maxWidth='fit-content' text={t('subText')} fontSize='2rem' />
			</Styled.NotFound>
		</Init>
	);
};
