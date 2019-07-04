import { Hero, Mannequin, HeroClassName } from '../types'

export function heroToMannequin(hero: Hero): Mannequin {
  return {
    stats: hero.stats,
    classes: (Object.keys(hero.classes) as unknown) as HeroClassName[],
    name: hero.name,
  }
}
