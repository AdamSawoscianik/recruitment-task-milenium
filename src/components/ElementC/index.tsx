import * as React from 'react';
import ElementE from 'components/ElementE';

import 'components/ElementC/styles.scss';

const classPrefix = 'element-c';

const ElementC: React.FC = () => (
  <div className={classPrefix}>
    <div className={`${classPrefix}__gradient`} />
    <div className={`${classPrefix}__content`}>
      <ElementE />
    </div>
    <div className={`${classPrefix}__gradient`} />
  </div>
);

export default ElementC;
