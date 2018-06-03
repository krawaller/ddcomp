import { SomeHeroes, SomeSkills } from './';

export type HeroClassName =
  | 'fighter'
  | 'human'
  | 'hunter'
  | 'lycanthrope'
  | 'merchant'
  | 'militant'
  | 'performer'
  | 'puritan'
  | 'reptilian'
  | 'rogue'
  | 'scholar'
  | 'wild'
  | 'warlock'
  | 'wizard'
  ;

export type HeroClasses = {
  [key in HeroClassName]: boolean
};

export type Class<T = HeroClassName> = {
  name: T,
  heroes: SomeHeroes,
  skills: SomeSkills
};

export type Classes = {
  [key in HeroClassName]: Class<key>
};

export type SomeClasses = Partial<HeroClasses>;
