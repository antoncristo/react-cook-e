import * as Styled from './network-error.styled';

export const NetworkError = () => (
	<Styled.NetworkError>
		<Styled.ErrorMessage>
			{`Something unexpected happened!
      Please try again later 
      OR 
      Reload the application (sometimes that helps :))`}
		</Styled.ErrorMessage>
	</Styled.NetworkError>
);
