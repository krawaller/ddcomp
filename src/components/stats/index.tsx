import React from 'react'
import { HeroStats } from '../../types'
import css from './stats.css'
import { Stat } from '../stat'
import produce from 'immer'

type StatsProps = {
  stats: HeroStats
  set: (stats: HeroStats) => void
}

export const Stats: React.FunctionComponent<StatsProps> = props => {
  const { stats, set } = props
  const statComps = Object.entries(stats).map(([name, val]) => (
    <Stat
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
