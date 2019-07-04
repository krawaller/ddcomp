import React from 'react'
import { HeroStats, HeroClassName, Hero, Mannequin } from '../../types'

import { StatsManipulator } from './StatsManipulator'
import { HeroDropdown } from './HeroSelector/HeroDropdown'
import { ClassPicker } from './ClassPicker'
import { heroToMannequin } from '../../utils'

import { heroes } from '../../data'
import { FormGroup } from '@blueprintjs/core'

type MannequinEditorProps = {
  set: (mannequin: Mannequin) => void
  mannequin: Mannequin
}

export const MannequinEditor: React.FunctionComponent<
  MannequinEditorProps
> = props => {
  const { mannequin, set } = props
  const hero = heroes[mannequin.name]
  const handleStatsChange = (stats: HeroStats) =>
    set({
      ...mannequin,
      stats,
      custom: JSON.stringify(stats) !== JSON.stringify(hero.stats),
    })
  const handleClassesChange = (classes: HeroClassName[]) =>
    set({
      ...mannequin,
      classes,
      custom:
        JSON.stringify(classes.slice().sort()) !==
        JSON.stringify(Object.keys(hero.classes).sort()),
    })
  const handleHeroSelect = (hero: Hero) => set(heroToMannequin(hero))

  return (
    <React.Fragment>
      <FormGroup>
        <HeroDropdown set={handleHeroSelect} value={hero} />
      </FormGroup>
      <FormGroup>
        <ClassPicker checked={mannequin.classes} set={handleClassesChange} />
      </FormGroup>
      <FormGroup>
        <StatsManipulator stats={mannequin.stats} set={handleStatsChange} />
      </FormGroup>
    </React.Fragment>
  )
}
