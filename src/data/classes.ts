import { Classes, Class, HeroBase } from '../types';
import { heroes, skills } from './';

export const classes = Object.keys(heroes).reduce(
  (heroMem, heroName: HeroBase) => Object.keys(heroes[heroName].classes).reduce(
    (classMem, className) => ({
      ...classMem,
      [className]: {
        name: className,
        heroes: {
          ...(classMem[className]||{}).heroes || {},
          [heroName]: true
        },
        skills: {
          ...(classMem[className]||{}).skills || {},
          ...Object.keys(skills).reduce(
            (skillMem, skillName) => ({
              ...skillMem,
              ...(skills[skillName].classes||{})[className] && {
                [skillName]: true
              }
            }),
            {}
          )
        }
      }
    }),
    heroMem
  ),
  {}
) as Classes;
