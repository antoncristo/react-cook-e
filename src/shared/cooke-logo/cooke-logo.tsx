import { DoughnutIcon } from '@cooke/assets';
import * as Styled from './cooke-logo.styled';

interface CookeLogoProps {
	fontSize: string;
	iconDiameter: number;
}

export const CookeLogo = (props: CookeLogoProps) => {
	const { fontSize, iconDiameter } = props;

	return (
		<Styled.CookeLogo $fontSize={fontSize}>
			<DoughnutIcon width={iconDiameter} height={iconDiameter} right='1rem' />
			CooK-E
		</Styled.CookeLogo>
	);
};
