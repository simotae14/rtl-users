import { render, screen, within } from '@testing-library/react';

import UserList from './UserList';

test('render one row per user', () => {
  // Render the component
  const users = [
    {
      name: 'jane',
      email: 'jane@jane.com'
    },
    {
      name: 'sam',
      email: 'sam@sam.com'
    }
  ];
  render(<UserList users={users} />)
  // find all the rows in the table
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('render email and name of each user', () => {
  // Render the component
  const users = [
    {
      name: 'jane',
      email: 'jane@jane.com'
    },
    {
      name: 'sam',
      email: 'sam@sam.com'
    }
  ];
  render(<UserList users={users} />);

  for (let user in users) {
    const name = screen.getByRole('cell', {
      name: user.name
    });
    const email = screen.getByRole('cell', {
      name: user.email
    });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});