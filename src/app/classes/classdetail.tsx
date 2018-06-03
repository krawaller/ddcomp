import * as React from 'react';
import {
  ListItem,
  ListItemText,
} from 'rmwc/List';

import {Crumbs} from '../components/crumbs';

import {Link} from 'react-router-dom';

import {classes} from '../../data';
import {HeroClassName, Class} from '../../types';

import {HeroList} from '../heroes/herolist';
import {SkillList} from '../skills/skillist';

type ClassProps = {
};

const notEmpty = obj => !!Object.keys(obj).length;

export const ClassDetail: React.StatelessComponent<any> = (props) => {
  const classData: Class = classes[props.match.params.class];
  return (
    <>
      <Crumbs crumbs={[ ['/', 'Home'], ['/classes', 'Classes'], ['/classes/' + classData.name, classData.name] ]} />
      <h2>{classData.name}</h2>
      <p>Cool class!</p>
      { notEmpty(classData.heroes) && (
        <>
          <h3>Heroes with this class</h3>
          <HeroList partial include={classData.heroes} />
        </>
      )}
      { notEmpty(classData.skills) && (
        <>
          <h3>Skills with this class</h3>
          <SkillList partial include={classData.skills} />
        </>
      )}
    </>
  );
};
