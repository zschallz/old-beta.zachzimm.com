import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders About me link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/About me/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Projects link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Projects/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Blog link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Blog/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Contact link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Contact/i);
  expect(linkElement).toBeInTheDocument();
});

