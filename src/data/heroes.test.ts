import { heroes } from './heroes'
import { HeroBase, SkillName } from 'types'

type HeroTest = {
  viableSkills?: SkillName[]
  canTake?: SkillName[]
  cannotTake?: SkillName[]
}

type HeroTests = Partial<{ [hero in HeroBase]: HeroTest }>

const tests: HeroTests = {
  infamousButcher: {
    canTake: ['gourmet'],
    cannotTake: ['goblinSlayer'],
  },
  voidWitch: {
    viableSkills: [
      'bloodCurse',
      'bloodlust',
      'claws',
      'counter',
      'decay',
      'dopesmoker',
      'drainLife',
      'gourmet',
      'illusoryDouble',
      'immunity',
      'levitate',
      'lurker',
      'magicMissile',
      'meditation',
      'misdirection',
      'mistForm',
      'mysticShield',
      'provoke',
      'rebuke',
      'repulsion',
      'shockWave',
      'sixthSense',
      'sneakAttack',
      'transcendence',
      'voidwalker',
      'warding',
    ],
  },
}

describe('the heroes data', () => {
  for (const [name, checks] of Object.entries(tests)) {
    describe(`the ${name} hero`, () => {
      const hero = heroes[name as HeroBase]
      for (const viableSkill of checks!.canTake || []) {
        test(`can take ${viableSkill}`, () => {
          expect(hero.viableSkills[viableSkill]).toBe(true)
        })
      }
      for (const unviableSkills of checks!.cannotTake || []) {
        test(`cannot take ${unviableSkills}`, () => {
          expect(hero.viableSkills[unviableSkills]).toBe(undefined)
        })
      }
      if (checks!.viableSkills) {
        test(`viable skills are ${checks!.viableSkills.join(',')}`, () => {
          expect(checks!.viableSkills!.sort()).toEqual(
            Object.keys(hero.viableSkills).sort()
          )
        })
      }
    })
  }
})
