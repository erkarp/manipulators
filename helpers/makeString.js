export default (s, fn) => {
  if (typeof s !== 'string') {
    try {
      s = s.toString()
    } catch (e) {
      console.error('Input cannot be represented as a string.', e)
      return
    }
  }
  return fn(s)
}