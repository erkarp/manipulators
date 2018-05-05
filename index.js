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

export default function capitalizeRandomly (s) {
  return makeString(s, s => {
    if (typeof s === 'string') {
      return s.split('').map(char => {
        return getRandomInt(2) ? char.toUpperCase() : char.toLowerCase()
      }).join('')
    }
  })
}

// From MDN
function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}
