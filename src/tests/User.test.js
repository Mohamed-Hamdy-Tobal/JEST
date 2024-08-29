import { render, screen } from '@testing-library/react';
import { User } from '../components/User';

test('renders User', () => {
    render(<User />);

    // Here i don't pass a props value and also not write it in the text
    const user = screen.getByText("Welcome")

    expect(user).toBeInTheDocument();
});

test("Render User With a real props", () => {
    render(<User user="Mohamed"/>) // Value Here must be like what i pass to the screen text

    const text = screen.getByText("Welcome Mohamed")

    expect(text).toBeInTheDocument();

})