import { testSkillViability, TestHero } from './testSkillViability'
import { RawSkill, HeroStats } from '../types'

let result: boolean
let skill: Partial<RawSkill<any>>
let hero: TestHero

describe('The testSkillViability function', () => {
  describe('For a skill with no conditions', () => {
    test('we get true', () => {
      hero = {
        stats: makeStats(7, 7, 7, 7, 7, 7),
        classes: {},
      }
      skill = {}
      result = testSkillViability({ hero, skill })
      expect(result).toBe(true)
    })
  })
})

function makeStats(...vals: number[] & { length: 6 }): HeroStats {
  const [AGI, CON, MAG, MRL, PER, STR] = vals
  return { AGI, CON, MAG, MRL, PER, STR }
}
