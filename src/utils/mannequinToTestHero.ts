import { Mannequin } from '../types'
import { TestHero } from './testSkillViability'

export function mannequinToTestHero(mannequin: Mannequin): TestHero {
  return {
    stats: mannequin.stats,
    classes: mannequin.classes.reduce(
      (mem, className) => ({ ...mem, [className]: true }),
      {}
    ),
    name: mannequin.name,
  }
}
