import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'

import { Stats } from '.'
import { HeroStats } from 'types'

storiesOf('Stats', module)
  .add('the stats panel', () => {
    const stats: HeroStats = {
      AGI: 7,
      CON: 5,
      MAG: 4,
      MRL: 9,
      PER: 6,
      STR: 9,
    }
    return <Stats stats={stats} set={newStats => console.log(newStats)} />
  })
  .add('with tester comp', () => {
    return <Tester />
  })

const Tester: React.FunctionComponent<{}> = props => {
  const [stats, setStats] = useState<HeroStats>({
    AGI: 7,
    CON: 5,
    MAG: 4,
    MRL: 9,
    PER: 6,
    STR: 9,
  })
  return <Stats stats={stats} set={setStats} />
}
