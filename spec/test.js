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

  it('should capitalize everything', function () {
    let s = toys.capitalizeEvery(string)
    expect(s).toEqual('THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG.')
  })

  it('should capitalize characters at every other index', function () {
    let s = toys.capitalizeAlternately(string)
    expect(s).toEqual('ThE QuIcK BrOwN FoX JuMpEd oVeR ThE LaZy dOg.')
  })

  it('should capitalize characters at every fourth index', function () {
    let s = toys.capitalizeEvery(4, string)
    expect(s).toEqual('The QuicK brOwn Fox JumpEd oVer The Lazy dog.')
  })
})
