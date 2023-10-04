import { useLocation, useNavigate } from 'react-router-dom';
import { cookePathnames } from '@cooke/router';
import { DoughnutIcon } from '@cooke/assets';

import * as Styled from './cooke-logo.styled';

interface CookeLogoProps {
	fontSize: string;
	iconDiameter: number;
}

export const CookeLogo = (props: CookeLogoProps) => {
	const { fontSize, iconDiameter } = props;
	const navigate = useNavigate();
	const location = useLocation();

	const onLogoClick = () => {
		if (!location.pathname.includes('dashboard')) {
			navigate(cookePathnames.authenticatedPathNames.DASHBOARD);
		}
	};

	return (
		<Styled.CookeLogo onClick={onLogoClick} $fontSize={fontSize}>
			<DoughnutIcon width={iconDiameter} height={iconDiameter} right='1rem' />
			CooK-E
		</Styled.CookeLogo>
	);
};
