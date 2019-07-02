import { storiesOf } from '@storybook/react'
import React from 'react'

import { HeroDropdown } from './index'
import { heroList } from '../../../../data'

storiesOf('HeroDropdown', module).add('basic', () => {
  return (
    <HeroDropdown set={hero => console.log('HERO', hero)} value={heroList[0]} />
  )
})
