import React from 'react'
import { HeroStats, HeroClassName, Hero, Mannequin } from '../../types'

import { StatsManipulator } from './StatsManipulator'
import { HeroSelector } from './HeroSelector'
import { ClassPicker } from './ClassPicker'
import { heroToMannequin } from '../../utils'

type MannequinEditorProps = {
  set: (mannequin: Mannequin) => void
  mannequin: Mannequin
}

const customHeroName = 'This custom hero'

export const MannequinEditor: React.FunctionComponent<
  MannequinEditorProps
> = props => {
  const { mannequin, set } = props
  const handleStatsChange = (stats: HeroStats) =>
    set({ stats, classes: mannequin.classes, name: customHeroName })
  const handleClassesChange = (classes: HeroClassName[]) =>
    set({ classes, stats: mannequin.stats, name: customHeroName })
  const handleHeroSelect = (hero: Hero) => set(heroToMannequin(hero))

  return (
    <React.Fragment>
      <HeroSelector set={handleHeroSelect} />
      <hr />
      <ClassPicker checked={mannequin.classes} set={handleClassesChange} />
      <StatsManipulator stats={mannequin.stats} set={handleStatsChange} />
      <h4>{mannequin.name}</h4>
    </React.Fragment>
  )
}
