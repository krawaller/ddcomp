import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'

import { ClassSelect } from '.'
import { HeroClassName } from 'types'

storiesOf('ClassSelect', module).add('basic', () => {
  return <Tester />
})

const Tester: React.FunctionComponent<{}> = props => {
  const [checked, setChecked] = useState<HeroClassName[]>(['performer'])
  return <ClassSelect set={setChecked} checked={checked} />
}
