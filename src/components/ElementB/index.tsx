import * as React from 'react';

import 'components/ElementB/styles.scss';
import ElementC from 'components/ElementC';

const classPrefix = 'element-b';

const ElementB: React.FC = () => (
  <div className={classPrefix}>
    <div className={`${classPrefix}__content`}>
      <ElementC />
    </div>
  </div>
);

export default ElementB;
