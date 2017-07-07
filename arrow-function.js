//array with city names
const cities = ['Toronto', 'Montreal', 'Calgary', 'Vancouver'];

//ES 5
const showCities = cities.map(function(name) {
    return `city is ${name}`;
});

//ES 6
const showCitiesArrowSingle = cities.map(name => {
    return `arrow city is ${name}`;    
});

//ES 6 - Hiding return keyword
const showCitiesOneLine = cities.map(name => `one line: ${name}`);

//ES 6 - Useful example
const showCitiesChain = cities
                        .filter(name => name === 'Toronto') //compares name of the city
                        .map(name => `I love ${name}`); // then maps it

console.log(showCitiesChain);