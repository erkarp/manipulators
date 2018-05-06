import * as capitalize from '../index'
import makeString from '../helpers'

describe('makeString', function () {
  const test = s => { return s.toUpperCase() }

  it('should turn an empty array into a string', function () {
    expect(makeString([], test)).toEqual('')
  })

  it('should turn a populated array into a string', function () {
    expect(makeString(['hello', 0, 11], test)).toEqual('HELLO,0,11')
  })

  it('should turn a boolean into a string', function () {
    expect(makeString(false, test)).toEqual('FALSE')
  })

  it('should turn a positive number into a string', function () {
    expect(makeString(5000, test)).toEqual('5000')
  })

  it('should turn an object into a string', function () {
    expect(makeString({}, test)).toEqual('[OBJECT OBJECT]')
  })
})

describe('Toys', function () {
  let string

  beforeEach(function () {
    string = 'The quick brown fox jumped over the lazy dog.'
  })

  it('should capitalize the first letter of each word', function () {
    let s = capitalize.words(string)
    expect(s).toEqual('The Quick Brown Fox Jumped Over The Lazy Dog.')
  })

  it("shouldn't change the string's length", function () {
    let s = capitalize.randomly(string)
    expect(s.length).toEqual(string.length)
  })

  it('should capitalize everything', function () {
    let s = capitalize.every(string)
    expect(s).toEqual('THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG.')
  })

  it('should capitalize characters at every other index', function () {
    let s = capitalize.alternately(string)
    expect(s).toEqual('ThE QuIcK BrOwN FoX JuMpEd oVeR ThE LaZy dOg.')
  })

  it('should capitalize characters at every fourth index', function () {
    let s = capitalize.every(4, string)
    expect(s).toEqual('The QuicK brOwn Fox JumpEd oVer The Lazy dog.')
  })

  it('should capitalize all the vowels besides "y"', function () {
    let s = capitalize.vowels(string)
    expect(s).toEqual('thE qUIck brOwn fOx jUmpEd OvEr thE lAzy dOg.')
  })
})
