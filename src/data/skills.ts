import { SkillBook, Skill, SomeHeroes } from '../types'
import { heroes } from './heroes'
import { testSkillViability } from '../utils/testSkillViability'
import { rawSkills } from './skills.raw'

const heroList = Object.values(heroes)

export const skills = Object.values(rawSkills).reduce(
  (mem: Partial<SkillBook>, skill) => ({
    ...mem,
    [skill.name]: {
      ...skill,
      startSkillFor: heroList
        .filter(hero => hero.startSkills[skill.name])
        .reduce((mem, h) => ({ ...mem, [h.name]: true }), {} as SomeHeroes),
      suggestedFor: heroList
        .filter(hero => hero.suggestedSkills[skill.name])
        .reduce((mem, h) => ({ ...mem, [h.name]: true }), {} as SomeHeroes),
      viableFor: heroList
        .filter(hero => testSkillViability({ hero, skill }))
        .reduce((mem, h) => ({ ...mem, [h.name]: true }), {} as SomeHeroes),
    } as Skill,
  }),
  {} as Partial<SkillBook>
) as SkillBook
