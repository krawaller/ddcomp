import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { MannequinEditor } from './index'
import { heroToMannequin } from '../../utils'
import { heroList } from '../../data'
import { Mannequin } from '../../types'

const defaultMannequin = heroToMannequin(heroList[0])

storiesOf('MannequinEditor', module)
  .add('static', () => {
    return (
      <MannequinEditor
        set={mqn => console.log(mqn)}
        mannequin={defaultMannequin}
      />
    )
  })
  .add('tester', () => {
    return <Tester />
  })

const Tester: React.FunctionComponent = () => {
  const [mannequin, setMannequin] = useState<Mannequin>(defaultMannequin)
  return <MannequinEditor set={setMannequin} mannequin={mannequin} />
}
