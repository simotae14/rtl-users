import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  // 1. Render the component
  render(<UserForm />);
  // 2. Manipulate the component or find an element on it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // 3. Assertion - make sure the component is doing 
  // what we expected it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', () => {
  const mock = jest.fn();
  // 1. Render the component
  render(<UserForm onUserAdd={mock} />);
  // 2. Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  // 3. Simulate typing in a name
  user.click(nameInput);
  user.keyboard('jane');
  // 4. Simulate typing in an email
  user.click(emailInput);
  user.keyboard('jane@jane.com');

  // 5. Find the button
  const button = screen.getByRole('button');
  // 6. Simulate clicking the button to submit form
  user.click(button);

  // 7. Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: 'jane',
    email: 'jane@jane.com'
  });
});