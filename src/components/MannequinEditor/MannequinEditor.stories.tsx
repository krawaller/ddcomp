import { storiesOf } from '@storybook/react'
import React from 'react'
import { MannequinEditor } from './index'
import { heroToMannequin } from '../../utils'
import { heroList } from '../../data'

const defaultMannequin = heroToMannequin(heroList[0])

storiesOf('MannequinEditor', module).add('basic', () => {
  return (
    <MannequinEditor
      set={mqn => console.log(mqn)}
      mannequin={defaultMannequin}
    />
  )
})
