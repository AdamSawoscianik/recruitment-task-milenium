import * as React from 'react';

import { User } from 'types';

type Props = {
  list: User[];
  onAdd: (newUser: Omit<User, 'id'>) => void;
};

const UserForm: React.FC<Props> = ({ list, onAdd }) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [error, setError] = React.useState('');

  const disabled = list.length >= 5;

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setError('');
  };

  const onSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      setError('');

      if (!firstName.length || !lastName.length) {
        setError('Validation error');
      } else {
        onAdd({ firstName, lastName });
        clearForm();
      }
    },
    [firstName, lastName, onAdd, list]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <span>First Name:</span>
          <input
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
            type="type"
            name="firstName"
          />
        </label>

        <label>
          <span>Last Name:</span>
          <input
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
            type="type"
            name="lastName"
          />
        </label>
        <button disabled={disabled} type="submit">
          SUBMIT
        </button>
      </form>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default UserForm;
