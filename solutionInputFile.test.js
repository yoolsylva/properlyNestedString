const isProperlyNestedStr = require('./solutionInputFile')

describe('Solution read stream from file', () => {
  test('should return correct result', async () => {
    const result1 = await isProperlyNestedStr('dummy100000.csv')
    expect(result1).toEqual(false)
  })
})