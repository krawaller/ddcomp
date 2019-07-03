import { Classes } from '../types'
import { heroes, skills } from './'

export const classes = Object.values(heroes).reduce(
  (heroMem, hero) =>
    Object.keys(hero.classes).reduce(
      (classMem, className) => ({
        ...classMem,
        [className]: {
          name: className,
          heroes: {
            ...((classMem[className] || {}).heroes || {}),
            [hero.name]: true,
          },
          skills: {
            ...((classMem[className] || {}).skills || {}),
            ...Object.values(skills).reduce(
              (skillMem, skill) => ({
                ...skillMem,
                ...((skill.classes || {})[className] && {
                  [skill.name]: true,
                }),
              }),
              {}
            ),
          },
        },
      }),
      heroMem
    ),
  {}
) as Classes
