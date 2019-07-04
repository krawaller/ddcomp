import { testSkillViability, TestHero } from './testSkillViability'
import { RawSkill, HeroStats } from '../types'

type ViabilityTest = {
  skill: Partial<RawSkill<any>>
  hero: TestHero
  result: boolean
  desc: string
}

const tests: { [desc: string]: ViabilityTest[] } = {
  'no conditions': [
    {
      desc: 'for skill with no conditions',
      skill: {},
      hero: { classes: {}, stats: makeStatLine(7) },
      result: true,
    },
  ],
  'when skill lists classes': [
    {
      desc: 'that we dont have',
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
  ],
  'when skill lists stats': [
    {
      desc: 'we dont match',
      skill: { stats: { STR: 9, AGI: 9 } },
      hero: { classes: {}, stats: makeStatLine(8) },
      result: false,
    },
    {
      desc: 'we have',
      skill: { stats: { STR: 9, AGI: 9 } },
      hero: { classes: {}, stats: statsAnd({ AGI: 9 }, 5) },
      result: true,
    },
  ],
  'when skill lists andStats': [
    {
      desc: 'we dont match',
      skill: { andStats: { AGI: 8, STR: 8 } },
      hero: { classes: {}, stats: statsAnd({ AGI: 8 }, 7) },
      result: false,
    },
    {
      desc: 'we match',
      skill: { andStats: { AGI: 8, STR: 8 } },
      hero: { classes: {}, stats: makeStatLine(8) },
      result: true,
    },
  ],
  'when skill lists maxStats': [
    {
      desc: 'we exceed',
      skill: { maxStats: { AGI: 8, STR: 8 } },
      hero: { classes: {}, stats: statsAnd({ STR: 9 }, 7) },
      result: false,
    },
    {
      desc: 'we equal',
      skill: { maxStats: { AGI: 8, STR: 8 } },
      hero: { classes: {}, stats: makeStatLine(8) },
      result: false,
    },
    {
      desc: 'we are lower than',
      skill: { maxStats: { AGI: 8, STR: 8 } },
      hero: { classes: {}, stats: makeStatLine(7) },
      result: true,
    },
  ],
  'when skill names characters': [
    {
      desc: 'not including us',
      skill: { characters: { corpseBurner: true } },
      hero: { classes: {}, name: 'charlatanMagician', stats: makeStatLine(7) },
      result: false,
    },
    {
      desc: 'including us',
      skill: { characters: { corpseBurner: true } },
      hero: { classes: {}, name: 'corpseBurner', stats: makeStatLine(7) },
      result: true,
    },
  ],
}

describe('The testSkillViability function', () => {
  for (const [d, list] of Object.entries(tests)) {
    describe(d, () => {
      list.forEach(t => {
        const { skill, hero, result, desc } = t
        describe(desc, () => {
          test(`We get ${result}`, () => {
            expect(testSkillViability({ hero, skill })).toEqual(result)
          })
        })
      })
    })
  }
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
