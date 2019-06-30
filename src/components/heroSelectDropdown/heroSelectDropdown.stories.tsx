import { storiesOf } from '@storybook/react'
import React from 'react'
import { number, select } from '@storybook/addon-knobs'

import { HeroSelectDropdown } from './index'

storiesOf('HeroSelect', module).add('basic', () => {
  const value = number('Value', 7)
  const name = select('Name', ['AGI', 'CON', 'MAG', 'MRL', 'PER', 'STR'], 'AGI')
  return <HeroSelectDropdown set={hero => console.log('HERO', hero)} />
})
