import React from 'react'
import { MultiSelect } from '@blueprintjs/select'
import { HeroClassName } from '../../../types'
import { classes } from '../../../data'
import { nicifyCamel, highlightText } from '../../../utils'
import { MenuItem, Icon, Button } from '@blueprintjs/core'

import produce from 'immer'

const ClassPickerInner = MultiSelect.ofType<HeroClassName>()

const classList = Object.keys(classes).sort() as HeroClassName[]

type ClassPickerProps = {
  checked: HeroClassName[]
  set: (v: any) => void
}

export const ClassPicker: React.FunctionComponent<ClassPickerProps> = props => {
  const { set, checked } = props

  const onRemove = (evt: any, idx: number) => {
    const newValues = produce(checked, draft => {
      draft.splice(idx, 1)
    })
    set(newValues)
  }

  const onSelect = (cls: HeroClassName, n: any) =>
    set(
      checked.includes(cls)
        ? produce(checked, draft => {
            draft.splice(n, 1)
          })
        : checked.concat(cls)
    )

  const handleClear = () => set([])

  const clearButton = (
    <Button
      disabled={checked.length === 0}
      icon="cross"
      minimal={true}
      onClick={handleClear}
    />
  )

  return (
    <ClassPickerInner
      items={classList}
      selectedItems={checked}
      onItemSelect={onSelect}
      itemRenderer={(cls, { handleClick, modifiers, query }) => (
        <MenuItem
          active={modifiers.active}
          onClick={handleClick}
          key={cls}
          icon={
            <Icon
              icon={checked.includes(cls) ? 'tick' : 'blank'}
              iconSize={10}
            />
          }
          text={highlightText(nicifyCamel(cls), query)}
        />
      )}
      tagInputProps={{ onRemove, rightElement: clearButton }}
      tagRenderer={cls => <span>{cls}</span>}
      placeholder="Select classes"
    />
  )
}
