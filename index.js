const makeString = (s, fn) => 
{
	if (typeof s !== 'string')
	{
		try {
			s = s.toString()
		} 
		catch {
            console.error("Input cannot be represented as a string.");
            return;
        }
    }
    
    fn(s);
}

const capitalizeRandomly = s => makeString(s, function(s) 
{
    if (typeof s === 'string')
    {
        return s.split('').map(function(char) 
        { 
            return getRandomInt(2) ? char.toUpperCase() : char.toLowerCase();
        }).join('');
    }
});

// From MDN 
function getRandomInt(max) 
{
    return Math.floor(Math.random() * Math.floor(max));
}