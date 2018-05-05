const makeString = (s, fn) => {
  if (typeof s !== 'string') {
    try {
      s = s.toString('')
    } catch (e) {
      console.error('Input cannot be represented as a string.', e)
      return
    }
  }

  return fn(s)
}

export function capitalize (s) {
  return makeString(s, s => {
    return s.toLowerCase().split(' ').reduce((sentence, word) => {
      let wordArray = word.split(/\b(\w)/)

      if (wordArray.length) {
        wordArray[1] = wordArray[1].toUpperCase()
        word = wordArray.join('')
      }

      return sentence ? `${sentence} ${word}` : word
    }, '')
  })
}

export function capitalizeRandomly (s) {
  return makeString(s, s => {
    return s.split('').map(char => {
      return getRandomInt(2) ? char.toUpperCase() : char.toLowerCase()
    }).join('')
  })
}

// From MDN
function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}
