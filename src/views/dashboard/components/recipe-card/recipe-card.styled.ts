import styled from 'styled-components';

export const RecipeCard = styled.div`
	box-sizing: border-box;
	border: 0.1rem solid transparent;
	width: 22rem;
	aspect-ratio: 3/4;
	border-radius: 1.2rem;
	background-color: rgba(${({ theme }) => theme.colors.black}, 0.6);
	box-shadow: ${({ theme }) => theme.decorators.boxShadow.primary};
	padding: 1.6rem;
	transition: all 0.22s ease-in-out;

	&:hover,
	&:focus {
		transform: skew(2deg, 2deg) rotateY(3deg);
		border: 0.1rem solid rgba(${({ theme }) => theme.colors.ternary}, 1);
	}
`;
