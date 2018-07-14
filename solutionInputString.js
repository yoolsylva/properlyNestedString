function isProperlyNestedStr(str) {
  const nestedMap = {
    '(': ')',
    '{': '}',
    '[': ']',
    '<': '>'
  }

  const stack = []
  const length = str.length
  let popData, readData
  for (let i = 0; i < length; i++) {
    readData = str.charAt(i)

    if (nestedMap[readData]) {
      stack.push(readData)
    } else {
      // popData undefined if stack empty
      popData = stack.pop()
      if (nestedMap[popData] !== readData) return false
    }
  }

  if (stack.length === 0) return true
  else return false
}

module.exports = isProperlyNestedStr