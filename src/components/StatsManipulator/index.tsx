import React from 'react'
import { HeroStats } from '../../types'
import css from './StatsManipulator.css'
import { SingleStat } from './SingleStat/index'
import produce from 'immer'

type StatsManipulator = {
  stats: HeroStats
  set: (stats: HeroStats) => void
}

export const StatsManipulator: React.FunctionComponent<
  StatsManipulator
> = props => {
  const { stats, set } = props
  const statComps = Object.entries(stats).map(([name, val]) => (
    <SingleStat
      key={name}
      name={name}
      value={val}
      set={newVal =>
        set(
          produce(stats, draft => {
            draft[name] = newVal
          })
        )
      }
    />
  ))
  return <span className={css.stats}>{statComps}</span>
}
