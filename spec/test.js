import * as toys from '../index'

describe('String', function () {
  let string

  beforeEach(function () {
    string = 'The quick brown fox jumped over the lazy dog.'
  })

  it('should capitalize the first letter of each word', function () {
    let s = toys.capitalize(string)
    expect(s).toEqual('The Quick Brown Fox Jumped Over The Lazy Dog.')
  })

  it("shouldn't change the string's length", function () {
    let s = toys.capitalizeRandomly(string)
    expect(s.length).toEqual(string.length)
  })
})
