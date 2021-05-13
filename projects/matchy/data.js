/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare a variable called animal set to an empty object.
var animal = {};
/*Create key/value pairs (species, name and noises array) using dot
and bracket notation.*/
animal.species = "dog";
animal["name"] = "Merlin";
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare a variable called noises equal to an empty array.
var noises = [];
//Use bracket notation to add a noise to the 0 index of noises.
noises[0] = "woof";
//Use .push method to add a noise to the noises array.
noises.push("sniff");
/*Create a function that uses the .unshift method to add a noise to
the noises array.*/
noises.unshift("howl");
//Use .length property to add a noise to the end of the noises array.
noises[noises.length] = "growl";
//Console.log the length, last index and entire noises array.
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Use bracket notation to set the property noises value to the noises 
array.*/
animal["noises"] = noises;
/*Use bracket notation to add another noise to the noises array at 
the key of noises.*/
animal.noises[noises.length] = "yelp";
//Console.log the animal object.
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      
        Dot and bracket notation with quotations for known keys, and 
        just brackets for variable keys.
        
 * 2. What are the different ways of accessing elements on arrays?
 *      
        Accessing indexes with bracket notation, length property and 
        various array methods (.slice, .unshift, .pop, etc.).
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare a variable called animals set to an empty array.
var animals = [];
//Use .push to put our animal object inside the animals array.
animals.push(animal);
//console.log animals array.
console.log(animals);
//Create a variable called duck and assign it the given data.
var duck = {
    species: "duck",
    name: "Jerome",
    noises: ["quack", "honk", "sneeze", "whoosh"]
};
//Push duck to animals array.
animals.push(duck);
//console.log animals.
console.log(animals);
//Create 2 new animal objects and push them into the animals array.
var cat = {
    species: "cat",
    name: "Lester",
    noises: ["meow", "purr", "screech"]
};

var snake = {
    species: "snake",
    name: "Jake",
    noises: ["hiss", "rattle", "slither"]
};

animals.push(cat, snake);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I'm choosing an array structure because its good for lists.
var friends = [];
/*Create a function called getRandom that returns a random index of
the input array using math.random.*/
function getRandom(array){
    return Math.floor(Math.random() * array.length);
}
//Call getRandom to get a number 0-animals.length.
console.log(getRandom(animals));
/*Use the result of the above function to choose which animal name
to push into friends array and push it.*/
friends.push(snake.name);
/*Use if statement adn bracket notation to add the friends list as
a property to an animal object of your choosing.*/
if(animal.name === "Merlin"){
    animal["friends"] = friends;
}
//Console.log work so far.
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}