/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Create a funciton called search that takes an array and a string and 
tests if the string is strictly equal to the name property of an element
in the array.*/
function search(array, string){
    //Use a for loop to loop through array.
    for(var i = 0; i < array.length; i++){
        /*Use an if statement to test if name property equals string. 
        control for case sensitivity.*/
        if(array[i].name.toLowerCase() === string.toLowerCase()){
            //If so, return that element.
            return array[i];
        }
    }
    //Otherwise, return null.
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Create a function that takes array, name and replacement parameters.*/
function replace(array, name, replacement){
    //Use a for loop to loop through array.
    for(var i = 0; i < array.length; i++){
        /*Use if statement to test if the given name is equal to the 
        array element name property.*/
        if(array[i].name === name){
            /*If so, return the array with the replacement spliced in 
            using the splice method.*/
            return array.splice(array[i], 1, replacement);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a function called remove that takes parameters array and name.
function remove(array, name){
    //Loop through array.
    for(var i = 0; i < array.length; i++){
        /*use if statement to check if name equals array element 
        property name. Control for case sensitivity.*/ 
        if(array[i].name.toLowerCase() === name.toLowerCase()){
            /*If a match is found, use splice method to remove that 
            element from the array and return it.*/
            return array.splice(array[i], 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array, animalObj){
    //Create a variable to hold the result of the first test.
    var hasName = false;
    //Use a for loop to loop through array.
    for(var i = 0; i < array.length; i++){
        /*Use if statement to check if array element property name is equal to 
        animalObj property name.*/
        if(array[i].name === animalObj.name){
            //If so, hasName changes to true.
            hasName = true; 
        }
    }
    /*Use another if statement to test if animalObj has name and species string
    lengths greater than 0 and that the hasName variable is false.*/
    if(animalObj.name.length > 0 && animalObj.species.length > 0 && hasName === false){
        //If all 3 tests pass, push the animalObj into array and return it.
        return array.push(animalObj);
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
