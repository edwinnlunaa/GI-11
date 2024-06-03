const fs = require('fs');

// Read the file synchronously
const data = fs.readFileSync('space.txt', 'utf8');

// Split the data by commas and trim each planet name
const planets = data.split(',').map(planet => planet.trim());

// Print each planet to the console
planets.forEach(planet => {
    console.log(planet);
});