import React from 'react'
import { Select } from '@blueprintjs/select'
import { Button, MenuItem } from '@blueprintjs/core'
import { Hero } from '../../../../types'
import { heroList } from '../../../../data'
import { highlightText, nicifyCamel } from '../../../../utils'

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
