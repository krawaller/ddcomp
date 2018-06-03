import * as React from 'react';
import {
  ListItem,
  ListItemText,
} from 'rmwc/List';

import {Crumbs} from '../components/crumbs';

import {Link, RouteComponentProps} from 'react-router-dom';

import {heroes} from '../../data';
import {HeroBase, Hero} from '../../types';

import {SkillList} from '../skills/skillist';
import {ClassList} from '../classes/classlist'

type HeroProps = {
};

const notEmpty = obj => !!Object.keys(obj).length;

export const HeroDetail: React.StatelessComponent<RouteComponentProps<any> & HeroProps> = (props) => {
  const hero: Hero = heroes[props.match.params.hero];
  return (
    <>
      <Crumbs crumbs={[ ['/', 'Home'], ['/heroes', 'Heroes'], ['/heroes/' + hero.name, hero.name] ]} />
      <h2>{hero.name}</h2>
      <p>Cool dude!</p>
      <h3>Classes</h3>
      <ClassList partial include={hero.classes} />
      { notEmpty(hero.startSkills) && (
        <>
          <h3>Starting skills</h3>
          <SkillList partial include={hero.startSkills} />
        </>
      )}
      { notEmpty(hero.suggestedSkills) && (
        <>
          <h3>Suggested skills</h3>
          <SkillList partial include={hero.suggestedSkills} />
        </>
      )}
    </>
  );
};
