import makeString from './makeString'

export function characters (s, characterFunction) {
  return makeString(s, s => {
    return s.split('').map((char, i) => {
      return characterFunction(char, i)
    }).join('')
  })
}

export function words (s, wordFunction) {
  return makeString(s, s => {
    return s.split(' ').map((word) => {
      if (word.length) {
        return wordFunction(word)
      }
    }).join(' ')
  })
}
