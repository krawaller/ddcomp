import { RawSkillBook, SkillBook, SkillName, Skill, RawSkill, HeroBase, HeroClassName, SomeHeroes } from '../types';
import { heroes } from './heroes';

export const rawSkills: RawSkillBook = {
  alchemy: {
    name: 'alchemy',
    xp: 8,
    classes: {scholar: true},
    in: {base: true}
  },
  backstab: {
    name: 'backstab',
    xp: 10,
    classes: {hunter: true, rogue: true},
    in: {base: true}
  },
  blackMarket: {
    name: 'blackMarket',
    xp: 8,
    classes: {merchant: true, rogue: true},
    in: {base: true}
  },
  bloodCurse: {
    name: 'bloodCurse',
    xp: 8,
    classes: {warlock: true},
    in: {base: true}
  },
  bloodlust: {
    name: 'bloodlust',
    xp: 13,
    classes: {warlock: true, wild: true},
    in: {adventurer: true}
  },
  burly: {
    name: 'burly',
    xp: 6,
    stats: {STR: 8},
    in: {base: true}
  },
  claws: {
    name: 'claws',
    xp: 6,
    classes: {reptilian: true, warlock: true, lycanthrope: true},
    in: {adventurer: true}
  },
  combatReflexes: {
    name: 'combatReflexes',
    xp: 13,
    classes: {hunter: true, rogue: true},
    in: {base: true}
  },
  counter: {
    name: 'counter',
    xp: 10,
    stats: {AGI: 8},
    in: {base: true}
  },
  dauntless: {
    name: 'dauntless',
    xp: 6,
    stats: {MRL: 8},
    in: {base: true}
  },
  decay: {
    name: 'decay',
    xp: 8,
    classes: {warlock: true},
    in: {base: true}
  },
  drainLife: {
    name: 'drainLife',
    xp: 10,
    classes: {warlock: true},
    in: {base: true}
  },
  exterminator: {
    name: 'exterminator',
    xp: 8,
    classes: {fighter: true, hunter: true, wild: true},
    in: {base: true}
  },
  exploit: {
    name: 'exploit',
    xp: 10,
    classes: {fighter: true, hunter: true, militant: true, rogue: true},
    in: {promo: true}
  },
  ferociousCharge: {
    name: 'ferociousCharge',
    xp: 8,
    stats: {STR: 8},
    in: {base: true}
  },
  fieldcraft: {
    name: 'fieldcraft',
    xp: 6,
    classes: {wild: true},
    in: {base: true}
  },
  findWeakness: {
    name: 'findWeakness',
    xp: 8,
    classes: {fighter: true, hunter: true, wild: true},
    in: {base: true}
  },
  foeKiller: {
    name: 'foeKiller',
    xp: 8,
    classes: {fighter: true, hunter: true, militant: true},
    in: {base: true}
  },
  goblinSlayer: {
    name: 'goblinSlayer',
    xp: 8,
    classes: {fighter: true, hunter: true, wild: true},
    in: {base: true}
  },
  gourmet: {
    name: 'gourmet',
    xp: 6,
    maxStats: {MRL: 9},
    in: {base: true, promo: true}
  },
  immunity: {
    name: 'immunity',
    xp: 8,
    classes: {rogue: true, scholar: true, warlock: true, wild: true},
    in: {base: true, adventurer: true}
  },
  inquisitor: {
    name: 'inquisitor',
    xp: 10,
    classes: {puritan: true},
    in: {base: true}
  },
  intimidate: {
    name: 'intimidate',
    xp: 8,
    stats: {MRL: 8, STR: 8},
    in: {base: true}
  },
  levitate: {
    name: 'levitate',
    xp: 6,
    stats: {MAG: 9},
    in: {base: true}
  },
  looter: {
    name: 'looter',
    xp: 8,
    classes: {merchant: true, rogue: true},
    in: {base: true}
  },
  lycanthropy: {
    name: 'lycanthropy',
    xp: 13,
    classes: {lycanthrope: true},
    in: {adventurer: true}
  },
  magicMissile: {
    name: 'magicMissile',
    xp: 8,
    classes: {wizard: true},
    in: {base: true}
  },
  martialDiscipline: {
    name: 'martialDiscipline',
    xp: 8,
    classes: {militant: true, fighter: true},
    in: {adventurer: true}
  },
  meditation: {
    name: 'meditation',
    xp: 6,
    classes: {wizard: true},
    in: {adventurer: true}
  },
  mendWounds: {
    name: 'mendWounds',
    xp: 8,
    classes: {scholar: true, wild: true},
    in: {base: true}
  },
  mistForm: {
    name: 'mistForm',
    xp: 8,
    classes: {warlock: true, wizard: true},
    in: {base: true}
  },
  mysticShield: {
    name: 'mysticShield',
    xp: 10,
    classes: {wizard: true},
    in: {base: true}
  },
  performance: {
    name: 'performance',
    xp: 6,
    classes: {performer: true},
    in: {adventurer: true}
  },
  provoke: {
    name: 'provoke',
    xp: 6,
    stats: {MRL: 6},
    in: {base: true, adventurer: true}
  },
  rage: {
    name: 'rage',
    xp: 10,
    stats: {STR: 8},
    in: {base: true}
  },
  rebuke: {
    name: 'rebuke',
    xp: 10,
    classes: {puritan: true, warlock: true},
    in: {base: true}
  },
  riverRat: {
    name: 'riverRat',
    xp: 6,
    classes: {merchant: true, rogue: true, wild: true},
    in: {adventurer: true}
  },
  shieldwall: {
    name: 'shieldwall',
    xp: 8,
    stats: {STR: 8},
    in: {adventurer: true}
  },
  shockWave: {
    name: 'shockWave',
    xp: 10,
    classes: {wizard: true},
    in: {adventurer: true}
  },
  shrugOffPain: {
    name: 'shrugOffPain',
    xp: 8,
    stats: {CON: 8, MRL: 9},
    in: {base: true}
  },
  sixthSense: {
    name: 'sixthSense',
    xp: 8,
    stats: {MAG: 8, PER: 8},
    in: {base: true}
  },
  sneakAttack: {
    name: 'sneakAttack',
    xp: 8,
    stats: {PER: 8},
    in: {base: true, promo: true}
  },
  streetwise: {
    name: 'streetwise',
    xp: 6,
    classes: {merchant: true, rogue: true, performer: true},
    in: {adventurer: true}
  },
  track: {
    name: 'track',
    xp: 6,
    classes: {hunter: true, wild: true},
    in: {base: true}
  },
  transmute: {
    name: 'transmute',
    xp: 8,
    classes: {scholar: true},
    in: {base: true}
  },
  voidwalker: {
    name: 'voidwalker',
    xp: 8,
    characters: {voidWitch: true},
    in: {base: true}
  },
  warding: {
    name: 'warding',
    xp: 10,
    classes: {puritan: true, warlock: true},
    in: {base: true}
  }
};

export const skills = Object.keys(rawSkills).reduce(
  (mem: Partial<SkillBook>, skillName: SkillName) => ({
    ...mem,
    [skillName]: {
      ...(rawSkills[skillName] as RawSkill),
      startSkillFor: Object.keys(heroes).reduce(
        (s: SomeHeroes, heroName: HeroBase) => ({
          ...s,
          ...heroes[heroName].startSkills[skillName] && {
            [heroName]: true
          }
        }),
        {} as SomeHeroes
      ),
      suggestedFor: Object.keys(heroes).reduce(
        (s: SomeHeroes, heroName: HeroBase) => ({
          ...s,
          ...heroes[heroName].suggestedSkills[skillName] && {
            [heroName]: true
          }
        }),
        {} as SomeHeroes
      )
    } as Skill
  }),
  {} as Partial<SkillBook>
) as SkillBook;
