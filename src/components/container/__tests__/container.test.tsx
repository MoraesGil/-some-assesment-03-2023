import { render, screen } from '@testing-library/react';
import { Container } from '../container';

describe('<Container />', () => {
  it('should render the children', () => {
    render(<Container>container</Container>);
    const children = screen.getByText(/container/i);
    expect(children).toBeInTheDocument();
  });
});
