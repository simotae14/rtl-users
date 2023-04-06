import { render, screen } from '@testing-library/react';

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
  const { container } = render(<UserList users={users} />)
  // find all the rows in the table
  // eslint-disable-next-line
  const rows = container.querySelectorAll('tbody tr');
  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('render email and name of each user', () => {

});