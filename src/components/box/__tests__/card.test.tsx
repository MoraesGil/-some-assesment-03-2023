import { render, screen } from '@testing-library/react';
import { Box } from '../box';

describe('<Box />', () => {
  it('should render the children', () => {
    render(<Box>box</Box>);
    const children = screen.getByText(/box/i);
    expect(children).toBeInTheDocument();
  });
});
