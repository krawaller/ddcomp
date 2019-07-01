import { storiesOf } from '@storybook/react'
import React from 'react'

import { MannequinEditor } from './index'
storiesOf('MannequinEditor', module).add('basic', () => {
  return <MannequinEditor onChange={mqn => console.log(mqn)} />
})
