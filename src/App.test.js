import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // 1 - Render The Component, Virtual Render
  render(<App />);

  // 2 - Find The Element For Test, every thing will put on the screen, and i tell it what i want to test
  // const myLink = screen.getByText(/learn react/i);

  const btnById = screen.getByTestId("btn-1")

  // 3 - expect and text methods are from json file, i name the file App.test.js
  // here i tell it to check if it exist toBeInTheDocument
  expect(btnById).toBeInTheDocument();


  // ### Example ###

  // expect that the element not exist
  // expect(btnById).not.toBeInTheDocument(); // if the element exist will cause an error

  // expect that the text exist in the element
  expect(btnById).toHaveTextContent("Edit") // error if text not exist

  // Expect By Attribute
  expect(screen.getByTestId("google-link")).toHaveAttribute("href")
  expect(screen.getByTestId("google-link")).toHaveAttribute("href", 'https://reactjs.org') // with value of attribute

  // Check if disabled
  expect(btnById).toBeDisabled() // here check if it is disabled and also true
  expect(btnById).toHaveAttribute("disabled") // that only check if it has the disabled attribute, it can be true or false 
});
