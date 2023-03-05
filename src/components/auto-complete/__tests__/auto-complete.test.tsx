import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react';
import { AutoComplete, AutoCompleteProps } from '../auto-complete';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

describe('<AutoComplete />', () => {
  const options: AutoCompleteProps['options'] = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];
  const onChange = jest.fn();
  const onSelect = jest.fn();

  const renderComponent = (): RenderResult => {
    return render(
      <AutoComplete options={options} onChange={onChange} onSelect={onSelect} />
    );
  };

  const triggerAutoComplete = (text?: string): void => {
    const autoComplete = screen.getByRole('textbox');
    fireEvent.focus(autoComplete);
    fireEvent.change(autoComplete, { target: { value: text ?? 'any_text' } });
  };

  it('should render the component', () => {
    renderComponent();
    const autoComplete = screen.getByRole('textbox');
    expect(autoComplete).toBeInTheDocument();
  });

  it('should show options when input is focused', () => {
    renderComponent();

    triggerAutoComplete();

    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    const option3 = screen.getByText('Option 3');
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  it('should call onChange when text field value is changed', () => {
    renderComponent();
    triggerAutoComplete('Option 1');
    expect(onChange).toHaveBeenCalledWith('Option 1');
  });

  it('should call onSelect when an option is selected', () => {
    renderComponent();
    triggerAutoComplete('Option 1');
    const option1 = screen.getByText('Option 1');
    fireEvent.click(option1);
    expect(onSelect).toHaveBeenCalledWith(options[0]);
  });
});
