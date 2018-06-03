import {SkillBook, SkillName, Release, SomeSkills, SomeClasses, HeroClassName} from './';

export type HeroStats = {
  AGI: number,
  CON: number,
  MAG: number,
  MRL: number,
  PER: number,
  STR: number
};

export type HeroBase =
  | 'alleyCat'
  | 'angelOfDeath'
  | 'banishedSorcerer'
  | 'bloodsportBrawler'
  | 'bogConjurer'
  | 'carnivalDrifter'
  | 'corpseBurner'
  | 'dishonoredKnight'
  | 'hinterlander'
  | 'infamousButcher'
  | 'jackSlasher'
  | 'mercenaryAlchemist'
  | 'riverPirate'
  | 'soldierOfFortune'
  | 'verminHunter'
  | 'wastelander'
  | 'witchSmeller'
  | 'voidWitch'
  ;

export type Hero<T = HeroClassName> = {
  name: T
  classes: SomeClasses
  stats: HeroStats
  xp: number
  startSkills: SomeSkills
  suggestedSkills: SomeSkills
  in: Release
}

export type HeroRoster = {
  [key in HeroBase]: Hero<key>
}

export type SomeHeroes = Partial<{[key in HeroBase]: boolean}>;
