import { HeroStats, SomeClasses, Release, SomeHeroes } from './'

export type SkillName =
  | 'alchemy'
  | 'backstab'
  | 'blackMarket'
  | 'bloodCurse'
  | 'bloodlust'
  | 'bleeding'
  | 'burly'
  | 'callFire'
  | 'claws'
  | 'combatReflexes'
  | 'counter'
  | 'dauntless'
  | 'deadEyeShot'
  | 'decay'
  | 'dilettante'
  | 'dopesmoker'
  | 'drainLife'
  | 'exterminator'
  | 'exploit'
  | 'ferociousCharge'
  | 'fieldcraft'
  | 'findWeakness'
  | 'foeKiller'
  | 'forlornHope'
  | 'goblinSlayer'
  | 'gourmet'
  | 'illusoryDouble'
  | 'immunity'
  | 'inquisitor'
  | 'intimidate'
  | 'levitate'
  | 'looter'
  | 'lurker'
  | 'lycanthropy'
  | 'magicMissile'
  | 'martialDiscipline'
  | 'meditation'
  | 'mendWounds'
  | 'misdirection'
  | 'mistForm'
  | 'mysticShield'
  | 'performance'
  | 'polearmDiscipline'
  | 'provoke'
  | 'rage'
  | 'rebuke'
  | 'repulsion'
  | 'riverRat'
  | 'shieldwall'
  | 'shockWave'
  | 'shrugOffPain'
  | 'sixthSense'
  | 'sneakAttack'
  | 'streetwise'
  | 'toTheFront'
  | 'track'
  | 'transmute'
  | 'transcendence'
  | 'voidwalker'
  | 'warding'

export interface RawSkill<T = SkillName> {
  name: T
  xp: number
  classes?: SomeClasses
  stats?: Partial<HeroStats>
  andStats?: Partial<HeroStats>
  maxStats?: Partial<HeroStats>
  characters?: SomeHeroes
  in: Partial<{ [key in Release]: boolean }>
}

export type RawSkillBook = { [key in SkillName]: RawSkill<key> }

export interface Skill<T = SkillName> extends RawSkill<T> {
  suggestedFor: SomeHeroes
  startSkillFor: SomeHeroes
  viableFor: SomeHeroes
}

export type SkillBook = { [key in SkillName]: Skill<key> }

export type SomeSkills = Partial<{ [key in SkillName]: boolean }>
