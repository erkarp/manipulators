describe('String', function() {
    const capitalizeRandomly = require('../index');

    beforeEach(function() {
        var string = "The quick fox jumped over the lazy dog.";
    });

    it("shouldn't change the string's length", function() {
        let toyedString = capitalizeRandomly(string);
        expect(toyedString.length).toEqual(string.length);
    });
})