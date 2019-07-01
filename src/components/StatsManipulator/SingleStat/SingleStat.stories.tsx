import { storiesOf } from '@storybook/react'
import React from 'react'
import { number, select } from '@storybook/addon-knobs'

import { SingleStat } from './index'

storiesOf('SingleStat', module).add('change input in the Knobs tab', () => {
  const value = number('Value', 7)
  const name = select('Name', ['AGI', 'CON', 'MAG', 'MRL', 'PER', 'STR'], 'AGI')
  return (
    <SingleStat name={name} value={value} set={newVal => console.log(newVal)} />
  )
})
