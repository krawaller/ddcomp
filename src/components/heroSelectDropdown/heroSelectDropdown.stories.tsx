import { storiesOf } from '@storybook/react'
import React from 'react'

import { HeroSelectDropdown } from './index'

storiesOf('HeroSelect', module).add('basic', () => {
  return <HeroSelectDropdown set={hero => console.log('HERO', hero)} />
})
