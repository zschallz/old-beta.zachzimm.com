import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders About me link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/About me/i);
  expect(linkElement).toBeInTheDocument();
});
