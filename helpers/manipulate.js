import makeString from './makeString'

function characters (s, characterFunction) {
  return makeString(s, s => {
    return s.split('').map((char, i) => {
      return characterFunction(char, i)
    }).join('')
  })
}

function words (s, wordFunction) {
  return makeString(s, s => {
    return s.split(' ').map((word) => {
      if (word.length) {
        return wordFunction(word)
      }
    }).join(' ')
  })
}

export default { characters, words }