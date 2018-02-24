let vals = [2, 10, 4, 5, 9, 7, undefined, 6, 8];
console.log(vals);
//Filetr
vals = vals.filter(x => x); //Removes undefined
vals = vals.filter(x => x % 2 == 0); //Only keeps even numbers
console.log(vals);
//Sort
vals = vals.sort();
console.log(vals); //Sorts everything in an accending order, it can also take a function as an argument to sort things.
//Map
vals = vals.map(x => x * 2); //Double all the values
console.log(vals);
//Reduse
var redused = vals.reduce((acc, val) => acc + val, 0); //Add all numbers
console.log(redused);
var biggest = vals.reduce((a, b) => a > b ? a : b); //Find the biggest number
console.log(biggest);
//Fill
vals.fill(7);
console.log(vals); //Fill all numbers with 7