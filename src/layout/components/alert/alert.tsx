import { useEffect, useRef } from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import { alertStore } from '@cooke/stores/alert-store';
import { Button } from '@cooke/shared';

import * as Styled from './alert.styled';
import { Colors } from '@cooke/style';

export const Alert = observer(() => {
	const alertRef = useRef<HTMLDivElement>(null);

	const dismissAction = action(() => {
		alertStore.dismiss();
	});

	const confirmAction = action(() => {
		alertStore.confirmationAction();
	});

	useEffect(() => {
		if (alertRef.current) {
			alertRef.current.focus();
		}
	});

	return alertStore.showAlert ? (
		<Styled.Alert tabIndex={0} ref={alertRef}>
			<Styled.Box>
				<Styled.Message>{alertStore.message}</Styled.Message>
				<Styled.Controls>
					<Button variant='secondary' onClick={dismissAction}>
						Return
					</Button>
					{alertStore.hasCallback ? <Button onClick={confirmAction}>OK</Button> : null}
				</Styled.Controls>
			</Styled.Box>
		</Styled.Alert>
	) : null;
});
