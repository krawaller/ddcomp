import React from 'react'
import { MultiSelect } from '@blueprintjs/select'
import { HeroClassName } from '../../types'
import { classes } from '../../data'
import { MenuItem, Icon, Button } from '@blueprintjs/core'
//import css from "./stat.css";

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

function nicifyCamel(text: string) {
  return (
    text[0].toUpperCase() +
    text
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .slice(1)
      .replace(' Of ', ' of ')
  )
}

function highlightText(text: string, query: string) {
  let lastIndex = 0
  const words = query
    .split(/\s+/)
    .filter(word => word.length > 0)
    .map(escapeRegExpChars)
  if (words.length === 0) {
    return [text]
  }
  const regexp = new RegExp(words.join('|'), 'gi')
  const tokens: React.ReactNode[] = []
  while (true) {
    const match = regexp.exec(text)
    if (!match) {
      break
    }
    const length = match[0].length
    const before = text.slice(lastIndex, regexp.lastIndex - length)
    if (before.length > 0) {
      tokens.push(before)
    }
    lastIndex = regexp.lastIndex
    tokens.push(
      <strong style={{ textDecoration: 'underline' }} key={lastIndex}>
        {match[0]}
      </strong>
    )
  }
  const rest = text.slice(lastIndex)
  if (rest.length > 0) {
    tokens.push(rest)
  }
  return tokens
}

function escapeRegExpChars(text: string) {
  return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
}
