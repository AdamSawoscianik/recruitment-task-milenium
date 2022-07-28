import TableElement from 'components/TableElement';
import * as React from 'react';
import { User } from 'types';

type Props = {
  list: User[];
  onRemove: (selectedId: number) => void;
};

const ElementF: React.FC<Props> = ({ list, onRemove }) => {
  return (
    <table>
      <thead>
        <tr style={{ height: '30px' }}>
          <th colSpan={2}>Company</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ id, firstName, lastName }) => (
          <TableElement
            key={id}
            id={id}
            firstName={firstName}
            lastName={lastName}
            onRemove={onRemove}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ElementF;
