import { HeroStats, SomeClasses, RawSkill, HeroBase } from '../types'

export interface TestHero {
  stats: HeroStats
  classes: SomeClasses
  name?: HeroBase
}

interface TestSkillViabilityArgs {
  hero: TestHero
  skill: Partial<RawSkill<any>>
}

export function testSkillViability(args: TestSkillViabilityArgs): boolean {
  const { hero, skill } = args

  const skillClasses = Object.keys(skill.classes || {})
  if (skillClasses.length) {
    if (!skillClasses.some(cls => hero.classes[cls])) {
      return false
    }
  }

  const skillOrStats = Object.entries(skill.stats || {})
  if (skillOrStats.length) {
    if (!skillOrStats.some(([name, val]) => hero.stats[name] >= val!)) {
      return false
    }
  }

  const skillsAndStats = Object.entries(skill.andStats || {})
  if (skillsAndStats.length) {
    if (!skillsAndStats.every(([name, val]) => hero.stats[name] >= val!)) {
      return false
    }
  }

  const skillsMaxStats = Object.entries(skill.maxStats || {})
  if (skillsMaxStats.length) {
    if (!skillsMaxStats.every(([name, val]) => hero.stats[name] < val!)) {
      return false
    }
  }

  const skillCharacters = Object.keys(skill.characters || {})
  if (skillCharacters.length) {
    if (!skillCharacters.some(name => hero.name === name)) {
      return false
    }
  }

  return true
}
