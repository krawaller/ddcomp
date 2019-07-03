import { skills } from './skills'

describe('the skills data', () => {
  describe('the gourmet skill', () => {
    test('is viable for corpseBurner', () => {
      expect(skills.gourmet.viableFor.corpseBurner).toBe(true)
    })
  })
})
