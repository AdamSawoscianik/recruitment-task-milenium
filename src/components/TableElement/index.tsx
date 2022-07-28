import * as React from 'react';

type Props = {
  id: number;
  firstName: string;
  lastName: string;
  onRemove: (selectedId: number) => void;
};

const TableElement: React.FC<Props> = ({
  id,
  firstName,
  lastName,
  onRemove,
}) => {
  const [isOver, setIsOver] = React.useState(false);

  return (
    <tr style={{ height: '30px', background: isOver ? 'red' : '' }}>
      <td style={{ width: '100px' }}>{firstName}</td>
      <td style={{ width: '100px' }}>
        {lastName}{' '}
        <button
          onMouseOver={() => setIsOver(true)}
          onMouseOut={() => setIsOver(false)}
          onClick={() => onRemove(id)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default TableElement;
