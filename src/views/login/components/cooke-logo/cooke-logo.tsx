import * as Styled from './cooke-logo.styled';

interface CookeLogoProps {
	fontSize: string;
}

export const CookeLogo = (props: CookeLogoProps) => {
	const { fontSize } = props;

	return <Styled.CookeLogo $fontSize={fontSize}>CooK-E</Styled.CookeLogo>;
};
