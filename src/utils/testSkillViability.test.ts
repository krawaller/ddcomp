import { testSkillViability, TestHero } from './testSkillViability'
import { RawSkill, HeroStats } from '../types'

type ViabilityTest = {
  skill: Partial<RawSkill<any>>
  hero: TestHero
  result: boolean
  desc: string
}

const tests: ViabilityTest[] = [
  {
    desc: 'for skill with no conditions',
    skill: {},
    hero: { classes: {}, stats: makeStatLine(7) },
    result: true,
  },
  {
    desc: 'when skill lists classes we dont have',
    skill: { classes: { fighter: true, wild: true } },
    hero: { classes: { warlock: true }, stats: makeStatLine(7) },
    result: false,
  },
  {
    desc: 'when skill lists classes we have',
    skill: { classes: { fighter: true, wild: true } },
    hero: { classes: { wild: true }, stats: makeStatLine(7) },
    result: true,
  },
  {
    desc: 'when skill lists stats we dont match',
    skill: { stats: { STR: 9, AGI: 9 } },
    hero: { classes: {}, stats: makeStatLine(8) },
    result: false,
  },
  {
    desc: 'when skill lists stats we have',
    skill: { stats: { STR: 9, AGI: 9 } },
    hero: { classes: {}, stats: statsAnd({ AGI: 9 }, 5) },
    result: true,
  },
  {
    desc: 'when skill lists andStats we dont match',
    skill: { andStats: { AGI: 8, STR: 8 } },
    hero: { classes: {}, stats: statsAnd({ AGI: 8 }, 7) },
    result: false,
  },
  {
    desc: 'when skill lists andStats we match',
    skill: { andStats: { AGI: 8, STR: 8 } },
    hero: { classes: {}, stats: makeStatLine(8) },
    result: true,
  },
  {
    desc: 'when skill lists maxStats we exceed',
    skill: { maxStats: { AGI: 8, STR: 8 } },
    hero: { classes: {}, stats: statsAnd({ STR: 9 }, 7) },
    result: false,
  },
  {
    desc: 'when skill lists maxStats we dont exceed',
    skill: { maxStats: { AGI: 8, STR: 8 } },
    hero: { classes: {}, stats: makeStatLine(8) },
    result: true,
  },
]

describe('The testSkillViability function', () => {
  tests.forEach(t => {
    const { skill, hero, result, desc } = t
    describe(desc, () => {
      test(`We get ${result}`, () => {
        expect(testSkillViability({ hero, skill })).toEqual(result)
      })
    })
  })
})

function makeStats(...vals: number[] & { length: 6 }): HeroStats {
  const [AGI, CON, MAG, MRL, PER, STR] = vals
  return { AGI, CON, MAG, MRL, PER, STR }
}

function makeStatLine(n: number) {
  return makeStats(n, n, n, n, n, n)
}

function statsAnd(stats: Partial<HeroStats>, other: number) {
  return {
    AGI: other,
    CON: other,
    MAG: other,
    MRL: other,
    PER: other,
    STR: other,
    ...stats,
  }
}
