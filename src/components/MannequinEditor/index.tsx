import React, { useState } from 'react'
import { HeroStats, HeroClassName, Hero } from 'types'

import { heroList } from '../../data'
import { StatsManipulator } from '../StatsManipulator'
import { HeroSelector } from '../HeroSelector'
import { ClassPicker } from '../ClassPicker'

type MannequinEditorProps = {
  onChange: (mannequin: Mannequin) => void
}

export type Mannequin = {
  stats: HeroStats
  classes: HeroClassName[]
}

function heroToMannequin(hero: Hero): Mannequin {
  return {
    stats: hero.stats,
    classes: (Object.keys(hero.classes) as unknown) as HeroClassName[],
  }
}

const defaultMannequin = heroToMannequin(heroList[0])

export const MannequinEditor: React.FunctionComponent<
  MannequinEditorProps
> = props => {
  const [mannequin, setMannequin] = useState<Mannequin>(defaultMannequin)
  const handleStatsChange = (stats: HeroStats) =>
    setMannequin({ stats, classes: mannequin.classes })
  const handleClassesChange = (classes: HeroClassName[]) =>
    setMannequin({ classes, stats: mannequin.stats })
  const handleHeroSelect = (hero: Hero) => setMannequin(heroToMannequin(hero))

  return (
    <React.Fragment>
      <HeroSelector set={handleHeroSelect} />
      <hr />
      <ClassPicker checked={mannequin.classes} set={handleClassesChange} />
      <StatsManipulator stats={mannequin.stats} set={handleStatsChange} />
    </React.Fragment>
  )
}
