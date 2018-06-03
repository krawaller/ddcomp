import * as React from 'react';

import {Link} from 'react-router-dom';

export default () => (
  <ul>
    <li>
      <Link to="/heroes">Heroes</Link>
    </li>
    <li>
      <Link to="/skills">Skills</Link>
    </li>
    <li>
      <Link to="/classes">Classes</Link>
    </li>
  </ul>
);
