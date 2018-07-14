const fs = require('fs')

function isProperlyNestedStr(fileName) {
  return new Promise(function (resolve, reject){
    const nestedMap = {
      '(': ')',
      '{': '}',
      '[': ']',
      '<': '>'
    }
    const stack = []

    const readStream = fs.createReadStream(fileName,{
      encoding: 'utf8',
      fd: null
    })

    readStream.on('readable', function () {
      let readData
      let popData
      while (null !== (readData = readStream.read(1))) {
        if (nestedMap[readData]) {
          stack.push(readData)
        } else {
          // popData undefined if stack empty
          popData = stack.pop()
          if (nestedMap[popData] !== readData) {
            resolve(false)
            readStream.close()
          }
        }
      }
      if (stack.length === 0) resolve(true)
      else resolve(false)
    })

    readStream.on('error', function (err) {
      reject(err)
    })
  })
}

module.exports = isProperlyNestedStr