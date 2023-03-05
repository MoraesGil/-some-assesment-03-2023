import { fireEvent, render, screen } from '@testing-library/react';
import { InputField } from '../input-field';

describe('<InputField />', () => {
  it('should type the value', () => {
    render(<InputField type="email" name="email" />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Moraes' } });
    expect(input).toHaveValue('Moraes');
  });

  it('should pass the class name', () => {
    render(<InputField type="email" name="email" className="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('email');
  });
});
