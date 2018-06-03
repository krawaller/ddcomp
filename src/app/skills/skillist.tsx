import * as React from 'react';
import {
  List
} from 'rmwc/List';

import {SkillName, SomeSkills} from '../../types';
import {skills} from '../../data';

import {SkillListItem} from './skillistitem';
import {Crumbs} from '../components/crumbs';

type SkillListProps = {
  include?: SomeSkills
  partial?: boolean
};

export const SkillList: React.StatelessComponent<SkillListProps> = ({include, partial}) => {
  const listSkills = Object.keys(skills).filter(skillName => !include || include[skillName]);
  return (
    <>
      {!partial && (
        <>
          <Crumbs crumbs={[ ['/', 'Home'], ['/skills', 'Skills'] ]} />
          <h2>Skills</h2>
        </>
      )}

      <List>
        {listSkills.map((skillName: SkillName) => (
          <SkillListItem key={skillName} skillName={skillName}/>
        ))}
      </List>
    </>
  );
}
