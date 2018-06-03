import * as React from 'react';
import {
  List
} from 'rmwc/List';

import {Crumbs} from '../components/crumbs';

import {Class, HeroClassName, SomeClasses} from '../../types';
import {classes} from '../../data';

import {ClassListItem} from './classlistitem';

type ClassListProps = {
  include?: SomeClasses
  partial?: boolean
};

export const ClassList: React.StatelessComponent<ClassListProps> = ({include, partial}) => {
  const listClasses = Object.keys(classes).filter(className => !include || include[className]);
  return (
    <>
      {!partial && (
        <>
          <Crumbs crumbs={[ ['/', 'Home'], ['/classes', 'Classes'] ]} />
          <h2>Classes</h2>
        </>
      )}
      <List>
        {listClasses.map((className: HeroClassName) => (
          <ClassListItem key={className} className={className}/>
        ))}
      </List>
    </>
  );
}
