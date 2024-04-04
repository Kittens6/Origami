const fs = require('fs');

// Get JSON data from the POST request
const jsonData = JSON.parse(process.argv[2]);

// Read existing JSON data from pages.json
const existingData = JSON.parse(fs.readFileSync('pages.json', 'utf8'));

// Append new data to existing data
existingData.push(jsonData);

// Write updated data back to pages.json
fs.writeFileSync('pages.json', JSON.stringify(existingData, null, 2));

console.log('Data added successfully.');
