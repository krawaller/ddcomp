import { storiesOf } from '@storybook/react'
import React from 'react'

import { HeroSelector } from './index'

storiesOf('HeroSelector', module).add('basic', () => {
  return <HeroSelector set={hero => console.log(hero)} />
})
