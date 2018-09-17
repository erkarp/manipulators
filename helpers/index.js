import makeString from './index'
import * as manipulate from './manipulate'

const words = (s) => {
  return manipulate.words(s, word => {
    let wordArray = word.split(/\b(\w)/)
    wordArray[1] = wordArray[1].toUpperCase()
    return wordArray.join('')
  })
}

const every = (n, s) => {
  if (typeof n === 'number') {
    return manipulate.characters(s, (char, i) => {
      return i % n ? char.toLowerCase() : char.toUpperCase()
    })
  } else {
    return makeString(n, n => {
      return n.toUpperCase()
    })
  }
}

const alternately = (s) => {
  return every(2, s)
}

const vowels = (s) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  return manipulate.characters(s.toLowerCase(), char => {
    return vowels.includes(char) ? char.toUpperCase() : char
  })
}

const randomly = (s) => {
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

export default { words, every, alternately, randomly, vowels }
