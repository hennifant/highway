import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the h1 element for Highway', () => {
    render(<Header />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Highway');
  });
});
