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
  | 'deadEyeShot'
  | 'decay'
  | 'dopesmoker'
  | 'drainLife'
  | 'exterminator'
  | 'exploit'
  | 'ferociousCharge'
  | 'fieldcraft'
  | 'findWeakness'
  | 'foeKiller'
  | 'goblinSlayer'
  | 'gourmet'
  | 'illusoryDouble'
  | 'immunity'
  | 'inquisitor'
  | 'intimidate'
  | 'levitate'
  | 'looter'
  | 'lurker'
  | 'lycanthropy'
  | 'magicMissile'
  | 'martialDiscipline'
  | 'meditation'
  | 'mendWounds'
  | 'misdirection'
  | 'mistForm'
  | 'mysticShield'
  | 'performance'
  | 'provoke'
  | 'rage'
  | 'rebuke'
  | 'repulsion'
  | 'riverRat'
  | 'shieldwall'
  | 'shockWave'
  | 'shrugOffPain'
  | 'sixthSense'
  | 'sneakAttack'
  | 'streetwise'
  | 'track'
  | 'transmute'
  | 'transcendence'
  | 'voidwalker'
  | 'warding'
  ;

export type RawSkill<T = SkillName> = {
  name: T
  xp: number
  classes?: SomeClasses
  stats?: Partial<HeroStats>
  andStats?: Partial<HeroStats>
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
