import { skills } from './skills'
import { HeroBase, SkillName } from 'types'

type SkillTest = {
  viableFor?: HeroBase[]
  notViableFor?: HeroBase[]
  onlyViableFor?: HeroBase[]
}

type SkillTests = Partial<{ [skill in SkillName]: SkillTest }>

const tests: SkillTests = {
  gourmet: {
    viableFor: ['corpseBurner'],
    notViableFor: ['dishonoredKnight'],
  },
  voidwalker: {
    onlyViableFor: ['voidWitch'],
  },
}

describe('the skills data', () => {
  for (const [name, checks] of Object.entries(tests)) {
    describe(`the ${name} skill`, () => {
      const skill = skills[name as SkillName]
      for (const viableHero of checks!.viableFor || []) {
        test(`is viable for ${viableHero}`, () => {
          expect(skill.viableFor[viableHero]).toBe(true)
        })
      }
      for (const unviableHero of checks!.notViableFor || []) {
        test(`is not viable for ${unviableHero}`, () => {
          expect(skill.viableFor[unviableHero]).not.toBe(true)
        })
      }
      if (checks!.onlyViableFor) {
        test(`is only viable for ${checks!.onlyViableFor.join(',')}`, () => {
          expect(checks!.onlyViableFor!.sort()).toEqual(
            Object.keys(skill.viableFor).sort()
          )
        })
      }
    })
  }
})
