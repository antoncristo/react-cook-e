import * as Styled from './not-found.styled';

export const NotFound = () => (
	<Styled.NotFound>
		<Styled.FourOFour maxWidth='fit-content' text='404' fontSize='10rem' />
		<Styled.FourOFour maxWidth='fit-content' text='Not Found' fontSize='4rem' />
		<Styled.FourOFour maxWidth='fit-content' text='this URL is invalid' fontSize='2rem' />
	</Styled.NotFound>
);
