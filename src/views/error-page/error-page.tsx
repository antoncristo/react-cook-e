import { Component, type ErrorInfo, type ReactNode } from 'react';
import { BreakPointSwitch, Button, CookeLogo } from '@cooke/shared';
import { breakpoints } from '@cooke/style';
import { Init } from '@cooke/init';
import { userStore } from '@cooke/stores/user-store';
import { type WithTranslation, withTranslation } from 'react-i18next';

import * as Styled from './error-page.styled';

interface IProps extends WithTranslation {
	children: ReactNode;
}

class ErrorPage extends Component<IProps, { isError: boolean }> {
	constructor(props: IProps) {
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
				<Init>
					<Styled.ErrorPage>
						<BreakPointSwitch
							before={<CookeLogo fontSize='5rem' iconDiameter={40} />}
							switchAt={`${breakpoints.mobile.width}px`}
							after={<CookeLogo fontSize='8rem' iconDiameter={70} />}
						/>
						<Styled.ErrorMessage>
							{`${this.props.t('errorBoundary.p1') as string}
		
		
						${this.props.t('errorBoundary.p2') as string}
						${this.props.t('errorBoundary.p3') as string}
						
						${this.props.t('errorBoundary.p4') as string} 
					`}
						</Styled.ErrorMessage>
						<Button onClick={this.reloadApp} width='18rem'>
							{this.props.t('errorBoundary.reload')}
						</Button>
					</Styled.ErrorPage>
				</Init>
			);
		}

		return this.props.children;
	}
}

export default withTranslation('errors')(ErrorPage);
