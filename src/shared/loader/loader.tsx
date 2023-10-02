import * as Styled from './loader.styled';

interface LoaderProps {
	size: 'S' | 'M' | 'L';
}

export const Loader = (props: LoaderProps) => (
	<Styled.Loader size={props.size}>
		<span className='loader' />
	</Styled.Loader>
);
