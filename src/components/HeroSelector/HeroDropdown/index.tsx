import React from 'react'
import { Select } from '@blueprintjs/select'
import { Button, MenuItem } from '@blueprintjs/core'
import { Hero } from '../../../types'
import { heroList } from '../../../data'

type HeroDropdownProps = {
  set: (hero: Hero) => void
  value: Hero
}

const HeroDropdownInner = Select.ofType<Hero>()

export const HeroDropdown: React.FunctionComponent<
  HeroDropdownProps
> = props => {
  const { set, value } = props
  return (
    <HeroDropdownInner
      items={heroList}
      onItemSelect={set}
      itemRenderer={(hero, { handleClick, modifiers, query }) => (
        <MenuItem
          active={modifiers.active}
          onClick={handleClick}
          key={hero.name}
          text={highlightText(nicifyCamel(hero.name), query)}
        />
      )}
      itemPredicate={(search, hero) =>
        nicifyCamel(hero.name)
          .toLowerCase()
          .match(search.toLowerCase()) !== null
      }
    >
      <Button
        text={nicifyCamel(value.name)}
        rightIcon="double-caret-vertical"
      />
    </HeroDropdownInner>
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
