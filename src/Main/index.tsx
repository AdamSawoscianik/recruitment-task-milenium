import * as React from 'react';
import ElementA from 'components/ElementA';
import ElementB from 'components/ElementB';
import ElementD from 'components/ElementD';
import ElementF from 'components/ElementF';
import { User } from 'types';

import 'Main/styles.scss';
import UserForm from 'components/UserForm';

const classPrefix = 'main';

const Main: React.FC = () => {
  const [list, setList] = React.useState<User[]>([]);

  const onRemove = (selectedId: number) => {
    setList(list.filter(({ id }) => selectedId !== id));
  };

  const onAdd = (data: Omit<User, 'id'>) => {
    const uId = !!list.length ? list[list.length - 1].id + 1 : 1;
    setList([...list, { ...data, id: uId }]);
  };

  return (
    <main className={classPrefix}>
      <ElementA />
      <ElementB />
      <ElementF list={list} onRemove={onRemove} />
      <br />
      <h4>Add New</h4>
      <UserForm list={list} onAdd={onAdd} />
      <br />

      <ElementD />
    </main>
  );
};

export default Main;
