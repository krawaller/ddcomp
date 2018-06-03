import * as React from 'react';
import {
  ListItem,
  ListItemText,
} from 'rmwc/List';

import {Crumbs} from '../components/crumbs';

import {Link, RouteComponentProps} from 'react-router-dom';

import {skills} from '../../data';
import {SkillName, Skill as SkillType} from '../../types';

import {HeroList} from '../heroes/herolist';

type SkillProps = {

};

const notEmpty = obj => !!Object.keys(obj).length;

export const SkillDetail: React.StatelessComponent<RouteComponentProps<any> & SkillProps> = (props) => {
  const skill:SkillType = skills[props.match.params.skill];
  return (
    <>
      <Crumbs crumbs={[ ['/', 'Home'], ['/skills', 'Skills'], ['/skills/' + skill.name, skill.name] ]} />
      <h2>{skill.name}</h2>
      <p>Cool skill!</p>
      { notEmpty(skill.startSkillFor) && (
        <>
          <h3>Start skill for</h3>
          <HeroList partial include={skill.startSkillFor}/>
        </>
      )}
      {
        notEmpty(skill.suggestedFor) && (
        <>
          <h3>Suggested for</h3>
          <HeroList partial include={skill.suggestedFor}/>
        </>
      )}
    </>
  );
};
