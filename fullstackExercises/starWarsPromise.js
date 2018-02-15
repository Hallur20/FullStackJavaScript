const fetch = require("node-fetch");

const URL =  "https://swapi.co/api/people/";

function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
 let results = {};
 fetch(URL+id).then(res=>res.json())
  .then(data =>{
    var newURL = data.films[0];
    console.log(data.films[0]);
    results.personName = data.name;
    return fetch(newURL).then(res=>res.json())
  })
  .then(data=>{
   var newURL = data.species[0];
   console.log(newURL);
   results.title = data.title;
   return fetch(newURL).then(res=>res.json())
  })
  .then(data =>{
   var newURL = data.homeworld;
   console.log(newURL);
   results.firstSpecie = data.name;
   return fetch(newURL).then(res=>res.json())
  })
  .then(data => {
    results.planet = data.name;
    console.log(results);
  })
  .catch(err=>console.log("Error: " + err))
}
const id = process.argv[2];
getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id);

