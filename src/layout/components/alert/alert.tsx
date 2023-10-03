import { Button } from '@cooke/shared';

import * as Styled from './alert.styled';

interface AlertProps {
	text: string;
	confirmationCallback?: () => void;
	cancelCallback?: () => void;
}

export const Alert = (props: AlertProps) => {
	const { text, cancelCallback, confirmationCallback } = props;

	return (
		<Styled.Alert>
			<Styled.Box>
				<Styled.Message>{text}</Styled.Message>
				<Styled.Controls>
					{cancelCallback ? <Button onClick={cancelCallback}>Cancel</Button> : null}
					{confirmationCallback ? (
						<Button onClick={confirmationCallback}>OK</Button>
					) : null}
				</Styled.Controls>
			</Styled.Box>
		</Styled.Alert>
	);
};
