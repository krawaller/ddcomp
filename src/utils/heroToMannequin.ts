import { Hero, Mannequin, HeroClassName } from '../types'
import { nicifyCamel } from './nicifyCamel'

export function heroToMannequin(hero: Hero): Mannequin {
  return {
    stats: hero.stats,
    classes: (Object.keys(hero.classes) as unknown) as HeroClassName[],
    name: nicifyCamel(hero.name),
  }
}
