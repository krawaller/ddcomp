import React from 'react'
import { Mannequin, SkillName } from '../../types'
import { heroes, skills } from '../../data'
import {
  mannequinToTestHero,
  testSkillViability,
  nicifyCamel,
} from '../../utils'
import { Tag, Intent } from '@blueprintjs/core'
import css from './SkillList.css'

type SkillListProps = {
  mannequin: Mannequin
  set: (val: SkillName) => void
}

type SkillTagProps = {
  name: SkillName
  special?: 'start' | 'suggested'
}

export const SkillList: React.FunctionComponent<SkillListProps> = props => {
  const { mannequin, set } = props
  const hero = heroes[mannequin.name]
  const tags: SkillTagProps[] = mannequin.custom
    ? Object.values(skills).filter(skill =>
        testSkillViability({ skill, hero: mannequinToTestHero(mannequin) })
      )
    : Object.keys(hero.viableSkills).map((name: SkillName) => ({
        name,
        special: hero.startSkills[name]
          ? 'start'
          : hero.suggestedSkills[name]
          ? 'suggested'
          : undefined,
      }))

  return (
    <div className={css['skill-tags-container']}>
      {tags.map(tag => (
        <Tag
          intent={tag.special === 'start' ? Intent.PRIMARY : Intent.NONE}
          minimal={!tag.special}
          className={css['skill-tag']}
          onClick={() => set(tag.name)}
          interactive
        >
          {nicifyCamel(tag.name)} ({skills[tag.name].xp}){' '}
        </Tag>
      ))}
    </div>
  )
}
