import { render, screen } from '@testing-library/react';

describe('Example component', () => {
	test('renders correctly', () => {
		render(<div data-testid='id-example'>Title</div>);
		const component = screen.getByTestId('id-example');
		expect(component).toBeInTheDocument();
	});
});
