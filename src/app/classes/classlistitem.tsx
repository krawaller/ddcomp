import * as React from 'react';
import {
  ListItem,
  ListItemText,
} from 'rmwc/List';

import {Link} from 'react-router-dom';

import {classes} from '../../data';
import {HeroClassName, Class} from '../../types';

type ClassListItemProps = {
  className: HeroClassName
};

export const ClassListItem: React.StatelessComponent<ClassListItemProps> = ({className}) => (
  <Link to={"/classes/"+className}>
    <ListItem>
      <ListItemText>{classes[className].name}</ListItemText>
    </ListItem>
  </Link>
);
