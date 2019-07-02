import { HeroStats, SomeClasses, RawSkill } from '../types'

export interface TestHero {
  stats: HeroStats
  classes: SomeClasses
}

interface TestSkillViabilityArgs {
  hero: TestHero
  skill: Partial<RawSkill<any>>
}

export function testSkillViability(args: TestSkillViabilityArgs): boolean {
  //const { hero, skill } = args

  return true
}
