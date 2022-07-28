import * as React from 'react';

import 'components/ElementD/styles.scss';

const classPrefix = 'element-d';

const ElementD: React.FC = () => (
  <div className={classPrefix}>
    <div className={`${classPrefix}__content`}>
      <span>D</span>
    </div>
  </div>
);

export default ElementD;
