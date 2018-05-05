import capitalizeRandomly from '../index'

describe('String', function () {
  let string

  beforeEach(function () {
    string = 'The quick fox jumped over the lazy dog.'
  })

  it("shouldn't change the string's length", function () {
    let toyedString = capitalizeRandomly(string)
    expect(toyedString.length).toEqual(string.length)
  })
})
