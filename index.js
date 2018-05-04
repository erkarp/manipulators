var capitalizeRandomly = function (s) 
{
    if (typeof s === 'string')
    {
        return s.split('').map(function(char) 
        { 
            return getRandomInt(2) ? char.toUpperCase() : char.toLowerCase();
        }).join('');
    }
}

// From MDN 
function getRandomInt(max) 
{
    return Math.floor(Math.random() * Math.floor(max));
}