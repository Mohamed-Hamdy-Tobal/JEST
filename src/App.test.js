import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // 1 - Render The Component
  render(<App />);

  // 2 - Find The Element For Test, every thing will put on the screen, and i tell it what i want to test
  const myLink = screen.getByText(/learn react/i);

  // 3 - expect and text methods are from json file, i name the file App.test.js
  // here i tell it to check if it exist toBeInTheDocument
  expect(myLink).toBeInTheDocument();
});
