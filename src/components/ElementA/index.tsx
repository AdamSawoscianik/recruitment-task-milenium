import * as React from 'react';

import 'components/ElementA/styles.scss';

const classPrefix = 'element-a';

const ElementA: React.FC = () => (
  <div className={classPrefix}>
    <div className={`${classPrefix}__content`} />
  </div>
);

export default ElementA;
