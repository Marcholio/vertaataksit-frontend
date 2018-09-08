import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import '../../styles/Admin.css';

const admin = () => (
  <div>
    <Link to="/admin/newcompany">
      <Button positive icon>
        <Icon name="plus" />
      </Button>
    </Link>
  </div>
);

export default admin;
