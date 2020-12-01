import { testFunction } from './index'

describe('Index', () => {
  it('returns a string', () => {
    const value = testFunction()

    expect(typeof value).toBe('string')
  })
})
