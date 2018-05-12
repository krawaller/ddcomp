import { SomeHeroes, HeroClassName, SomeSkills } from './';

export type Class<T = HeroClassName> = {
  name: T,
  heroes: SomeHeroes,
  skills: SomeSkills
};

export type Classes = {
  [key in HeroClassName]: Class<key>
};
