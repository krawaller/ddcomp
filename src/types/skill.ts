import { HeroStats, SomeClasses, HeroBase, Release, SomeHeroes } from './';

export type SkillName =
  | 'alchemy'
  | 'backstab'
  | 'blackMarket'
  | 'bloodCurse'
  | 'bloodlust'
  | 'burly'
  | 'claws'
  | 'combatReflexes'
  | 'counter'
  | 'dauntless'
  | 'decay'
  | 'drainLife'
  | 'exterminator'
  | 'exploit'
  | 'ferociousCharge'
  | 'fieldcraft'
  | 'findWeakness'
  | 'foeKiller'
  | 'goblinSlayer'
  | 'gourmet'
  | 'immunity'
  | 'inquisitor'
  | 'intimidate'
  | 'levitate'
  | 'looter'
  | 'lycanthropy'
  | 'magicMissile'
  | 'martialDiscipline'
  | 'meditation'
  | 'mendWounds'
  | 'mistForm'
  | 'mysticShield'
  | 'performance'
  | 'provoke'
  | 'rage'
  | 'rebuke'
  | 'riverRat'
  | 'shieldwall'
  | 'shockWave'
  | 'shrugOffPain'
  | 'sixthSense'
  | 'sneakAttack'
  | 'streetwise'
  | 'track'
  | 'transmute'
  | 'voidwalker'
  | 'warding'
  ;

export type RawSkill<T = SkillName> = {
  name: T
  xp: number
  classes?: SomeClasses
  stats?: Partial<HeroStats>
  maxStats?: Partial<HeroStats>
  characters?: SomeHeroes
  in: Partial<{
    [key in Release]: boolean
  }>
}

export type RawSkillBook = {
  [key in SkillName]: RawSkill<key>
}

export type Skill<T = SkillName> = RawSkill<T> & {
  suggestedFor: SomeHeroes
  startSkillFor: SomeHeroes
}

export type SkillBook = {
  [key in SkillName]: Skill<key>
}

export type SomeSkills = Partial<{[key in SkillName]: boolean}>;
