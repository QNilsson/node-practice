/* A callback is a function thats accepted as an argument and executed by another function (the higher order function)

there are two kinds, sync and asyc

the sync callbacks are executed at the same time as the higher-order function that uses the callback. sync callbakcs are blocking. 

async callbakcs are executed at a later time than the higher-order functions. async callbacks are non-blocking */
import axios from 'axios';
import fs from 'fs'; //file system

const greet = name => {
  return `Hello, ${name}!`;
};
console.log (greet ('Quinn'));

const people = ['Thor', 'Hulk', 'Iron Man', 'Black Widow'];

const greetings = people.map (greet);
//calls the greet function for every person in the array
//returns new array with this function executed

console.log (greetings);

const fetchData = callback => {
  setTimeout (() => {
    callback ('FetchData is done');
  }, 2000);
};

setTimeout (() => {
  console.log (`Timer is done`);
  fetchData (text => {
    console.log (text);
  });
}, 1500);

console.log ('hello');
console.log ('hi');

async function getPokeData () {
  //todo: convert to async/await
  return axios
    .get ('https://pokeapi.co/api/v2/pokemon/snorlax')
    .then (({data}) => {
      //data destructuring
      return data; //becomes another promise
    })
    .catch (error => {
      //handle the error
      console.error (error);
    });
}

async function main () {
  const snorlax = await getPokeData();
  try {
    await fs.writeFile('snorlax.json', JSON.stringify(snorlax, null, 2));
    console.log ('the file has been saved');
  } catch (err) {
    console.error ('could not write file');
  }
}

main ();
