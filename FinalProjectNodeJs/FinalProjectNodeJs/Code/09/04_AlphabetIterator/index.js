const OneCharCode = 48
const NineCharCode = 57

function createAlphabetIterator () {
  let currCode = OneCharCode

  return {
    next () {
      const currChar = String.fromCodePoint(currCode)
      if (currCode > NineCharCode) {
        return { done: true }
      }

      currCode++
      return { value: currChar, done: false }
    }
  }
}

const iterator = createAlphabetIterator()
let iterationResult = iterator.next()
while (!iterationResult.done) {
  console.log(iterationResult.value)
  iterationResult = iterator.next()
}
