import { classes } from './classes'
import { SomeSkills, SomeHeroes } from 'types'

describe('The classes data', () => {
  describe('The puritan class', () => {
    test('has the correct skills', () => {
      expect(classes.puritan.skills).toEqual({
        forlornHope: true,
        inquisitor: true,
        rebuke: true,
        toTheFront: true,
        warding: true,
      } as SomeSkills)
    })
    test('has the correct heroes', () => {
      expect(classes.puritan.heroes).toEqual({
        corpseBurner: true,
        mendicantMonk: true,
        witchSmeller: true,
      } as SomeHeroes)
    })
  })
})
