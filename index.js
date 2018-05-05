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

export function words (s) {
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

export function every (n, s) {
  if (typeof n === 'number') {
    return makeString(s, s => {
      return s.split('').map((char, i) => {
        return i % n ? char.toLowerCase() : char.toUpperCase()
      }).join('')
    })
  } else {
    return makeString(n, n => {
      return n.toUpperCase()
    })
  }
}

export function alternately (s) {
  return every(2, s)
}

export function randomly (s) {
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
