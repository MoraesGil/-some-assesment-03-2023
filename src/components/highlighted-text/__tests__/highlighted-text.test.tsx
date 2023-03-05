import { render, screen } from '@testing-library/react';
import { HighlightedText } from '../highlighted-text';

describe('<HighlightedText />', () => {
  it('should highlight the text ignoring case sensitive', () => {
    render(
      <HighlightedText text="some highlight text" highlight="highlight text" />
    );
    const highlightedText = screen.getByTestId('highlighted-text');
    expect(highlightedText).toHaveTextContent('highlight text');
  });
});
