import * as React from 'react';
import {
  List
} from 'rmwc/List';

import {Crumbs} from '../components/crumbs';

import {HeroBase, SomeHeroes} from '../../types';
import {heroes} from '../../data';

import {HeroListItem} from './herolistitem';

type HeroListProps = {
  include?: SomeHeroes
  partial?: boolean
};

export const HeroList: React.StatelessComponent<HeroListProps> = ({include, partial}) => {
  const listHeroes = Object.keys(heroes).filter(heroName => !include || include[heroName]);
  return (
    <>
      { !partial && (
        <>
          <Crumbs crumbs={[ ['/', 'Home'], ['/heroes', 'Heroes'] ]} />
          <h2>Heroes</h2>
        </>
      )}
      <List>
        {listHeroes.map((heroName: HeroBase) => (
          <HeroListItem key={heroName} heroName={heroName}/>
        ))}
      </List>
    </>
  );
};
