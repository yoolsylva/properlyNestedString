const isProperlyNestedStr = require('./solutionInputString')

describe('Solution read string input', () => {
  test('should return correct result', () => {
    const str1 = '(((((({[<'
    const result1 = isProperlyNestedStr(str1)
    expect(result1).toEqual(false)

    const str2 = '()[]{{{}}}<{[]}>'
    const result2 = isProperlyNestedStr(str2)
    expect(result2).toEqual(true)

    const str3 = ']]]]]}}}}}>>>>>>'
    const result3 = isProperlyNestedStr(str3)
    expect(result3).toEqual(false)
  })
})