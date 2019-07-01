import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'

import { ClassPicker } from './index'
import { HeroClassName } from 'types'

storiesOf('ClassPicker', module).add('basic', () => {
  return <Tester />
})

const Tester: React.FunctionComponent<{}> = props => {
  const [checked, setChecked] = useState<HeroClassName[]>(['performer'])
  return <ClassPicker set={setChecked} checked={checked} />
}
