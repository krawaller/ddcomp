import React from 'react'
import { Button } from '@blueprintjs/core'
import css from './SingleStat.css'

type SingleStatProps = {
  name: string
  value: number
  set: (val: number) => void
}

export const SingleStat: React.FunctionComponent<SingleStatProps> = props => {
  const { name, value, set } = props
  return (
    <span className={css.stat}>
      <Button
        disabled={value === 3}
        minimal
        icon="remove"
        onClick={() => set(value - 1)}
      />
      <span className={css.name}>{name}</span>
      <span className={css.value}>{value}</span>
      <Button
        disabled={value === 11}
        minimal
        icon="add"
        onClick={() => set(value + 1)}
      />
    </span>
  )
}
