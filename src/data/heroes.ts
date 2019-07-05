import { HeroRoster, Hero, HeroClassName, SomeSkills } from '../types'
import { rawHeroes } from './heroes.raw'
import { rawSkills } from './skills.raw'
import { testSkillViability } from '../utils/testSkillViability'

const rawSkillList = Object.values(rawSkills)

export const heroes: HeroRoster = Object.values(rawHeroes).reduce(
  (memo, hero) => ({
    ...memo,
    [hero.name]: {
      ...hero,
      viableSkills: rawSkillList
        .filter(skill => testSkillViability({ skill, hero }))
        .reduce((mem, s) => ({ ...mem, [s.name]: true }), {} as SomeSkills),
    },
  }),
  {} as HeroRoster
)

export const heroList = (Object.values(heroes) as unknown) as Hero<
  HeroClassName
>[]
