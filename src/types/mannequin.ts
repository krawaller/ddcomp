import { HeroStats } from './hero'
import { HeroClassName } from './class'

export type Mannequin = {
  stats: HeroStats
  classes: HeroClassName[]
  name: string
}
