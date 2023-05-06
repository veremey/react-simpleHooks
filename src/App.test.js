import { fireEvent, render, screen } from '@testing-library/react';

import { Counter } from './components/counter'

test('counter increment the count', () => {
  const {container} = render(<Counter />);
  const button = container.firstChild;
  
  expect(button.textContent).toBe('0');
  fireEvent.click(button);
  expect(button.textContent).toBe('1');
});
