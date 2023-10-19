import { Component, type ErrorInfo, type ReactNode } from 'react';
import { BreakPointSwitch, Button, CookeLogo } from '@cooke/shared';
import { breakpoints } from '@cooke/style';
import { userStore } from '@cooke/stores/user-store';

import * as Styled from './error-page.styled';

export class ErrorPage extends Component<{ children: ReactNode }, { isError: boolean }> {
	constructor(props: { children: ReactNode }) {
		super(props);
		this.state = {
			isError: false
		};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		this.setState({ isError: true });
		// eslint-disable-next-line
		console.error('[ErrorPage]:[message]::', error.name, error.message);
		// eslint-disable-next-line
		console.error('[ErrorPage]:[stack]::', JSON.stringify(errorInfo.componentStack));
	}

	reloadApp() {
		userStore.logOut();
	}

	render(): ReactNode {
		if (this.state.isError) {
			return (
				<Styled.ErrorPage>
					<BreakPointSwitch
						before={<CookeLogo fontSize='5rem' iconDiameter={40} />}
						switchAt={`${breakpoints.mobile.width}px`}
						after={<CookeLogo fontSize='8rem' iconDiameter={70} />}
					/>
					<Styled.ErrorMessage>
						{`Hurray! You Manged To Break The App :)
		
						What can be done?
		
						- Click the reload button and try again :)
						- An unexpected error happened in the app, try reloading the browser
						
						* If nothing helps, please accept my apologies.. I will try to find the error in my logs! 
					`}
					</Styled.ErrorMessage>
					<Button onClick={this.reloadApp} width='18rem'>
						Reload
					</Button>
				</Styled.ErrorPage>
			);
		}

		return this.props.children;
	}
}
