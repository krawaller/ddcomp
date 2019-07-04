import { HeroStats, HeroBase } from './hero'
import { HeroClassName } from './class'

export type Mannequin = {
  stats: HeroStats
  classes: HeroClassName[]
  name: HeroBase
  custom?: boolean
}
