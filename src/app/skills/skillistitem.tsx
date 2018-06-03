import * as React from 'react';
import {
  ListItem,
  ListItemText,
} from 'rmwc/List';

import {Link} from 'react-router-dom';

import {skills} from '../../data';
import {SkillName} from '../../types';

type SkillListItemProps = {
  skillName: SkillName
};

export const SkillListItem: React.StatelessComponent<SkillListItemProps> = ({skillName}) => (
  <Link to={"/skills/"+skillName}>
    <ListItem>
      <ListItemText>{skills[skillName].name}</ListItemText>
    </ListItem>
  </Link>
);
