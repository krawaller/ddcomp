import { Release, SomeSkills, SomeClasses } from './'

export type HeroStats = {
  AGI: number
  CON: number
  MAG: number
  MRL: number
  PER: number
  STR: number
}

export type HeroBase =
  | 'alleyCat'
  | 'angelOfDeath'
  | 'banishedSorcerer'
  | 'bloodsportBrawler'
  | 'bogConjurer'
  | 'carnivalDrifter'
  | 'charlatanMagician'
  | 'cloakedKiller'
  | 'corpseBurner'
  | 'dishonoredKnight'
  | 'fishyConfectioner'
  | 'fugitiveFop'
  | 'hermitAscetic'
  | 'highwayRobber'
  | 'hinterlander'
  | 'infamousButcher'
  | 'jackSlasher'
  | 'mendicantMonk'
  | 'mercenaryAlchemist'
  | 'naughtyNaturalist'
  | 'riverPirate'
  | 'sharpshooter'
  | 'sicklySoldier'
  | 'soldierOfFortune'
  | 'solitarySwordsman'
  | 'unlicensedSurgeon'
  | 'verminHunter'
  | 'wastelander'
  | 'witchSmeller'
  | 'voidWitch'

export interface RawHero<T = HeroBase> {
  name: T
  classes: SomeClasses
  stats: HeroStats
  xp: number
  startSkills: SomeSkills
  suggestedSkills: SomeSkills
  in: Release
}

export type RawHeroRoster = { [key in HeroBase]: RawHero<key> }

export interface Hero<T = HeroBase> extends RawHero<T> {
  viableSkills: SomeSkills
}

export type HeroRoster = { [key in HeroBase]: Hero<key> }

export type SomeHeroes = Partial<{ [key in HeroBase]: boolean }>
