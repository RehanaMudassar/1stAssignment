//Seeing the World: Think of at least five places in the world you’d like to visit.
let places = ["UK","Turkey","America","Austria","Qatar"];
console.log('favorite places are:');
for (let i = 0; i < places.length; i++) {
    console.log( places[i]);
  }
  console.log('displaying array in alphabetical order');
  for (let i = 0; i < places.length; i++) {
    places.sort();
    console.log( places[i]);
  }
  console.log('displaying array in reverse order');
  for (let i = 0; i < places.length; i++) {
    places.reverse();
    console.log( places[i]);
  }