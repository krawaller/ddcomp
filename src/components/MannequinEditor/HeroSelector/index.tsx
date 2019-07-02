import React, { useState, useCallback } from 'react'
import { Button } from '@blueprintjs/core'

import { HeroDropdown } from './HeroDropdown'

import { heroList } from '../../../data'
import { Hero } from 'types'

type HeroSelectorProps = {
  set: (hero: Hero) => void
}

export const HeroSelector: React.FunctionComponent<
  HeroSelectorProps
> = props => {
  const { set } = props
  const [currentInnerHero, setInnerHero] = useState<Hero>(heroList[0])
  const handleChangeInnerHero = useCallback(hero => setInnerHero(hero), [
    setInnerHero,
  ])
  const handleChooseHero = useCallback(() => set(currentInnerHero), [
    set,
    currentInnerHero,
  ])
  return (
    <React.Fragment>
      <HeroDropdown set={handleChangeInnerHero} value={currentInnerHero} />{' '}
      <Button onClick={handleChooseHero} text="Set stats to selected hero" />
    </React.Fragment>
  )
}
