import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page heading', () => {
  render(<App />);
  const heading = screen.getByText(/Oman Agriculture/i);
  expect(heading).toBeInTheDocument();
});
