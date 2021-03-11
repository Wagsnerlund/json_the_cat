const request = require('request');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, resp, body) => {
  if (error) {
    return console.log(error);
  }
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  const breed = data[0]
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`${breedName} does not exist.`);
  }
});



// const hhtps = require('https');

// https.get('https://api.thecatapi.com/v1/breeds/search?q=sib', () => {

// });

// fetch('https://api.thecatapi.com/v1/breeds/search?q=sib')
// .then(() => {

// });

// console.log(typeof body);

