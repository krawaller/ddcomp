import * as React from 'react';
import {
  ListItem,
  ListItemText,
} from 'rmwc/List';

import {Link} from 'react-router-dom';

import {heroes} from '../../data';
import {HeroBase} from '../../types';

type HeroListItemProps = {
  heroName: HeroBase
};

export const HeroListItem: React.StatelessComponent<HeroListItemProps> = ({heroName}) => (
  <Link to={"/heroes/"+heroName}>
    <ListItem>
      <ListItemText>{heroes[heroName].name}</ListItemText>
    </ListItem>
  </Link>
);
