import { storiesOf } from '@storybook/react'
import React from 'react'
import { heroToMannequin } from '../../utils'

import { SkillList } from './index'
import { heroes } from '../../data'

storiesOf('SkillList', module).add('for alleyCat', () => {
  return (
    <SkillList
      mannequin={heroToMannequin(heroes.alleyCat)}
      set={newVal => console.log(newVal)}
    />
  )
})
