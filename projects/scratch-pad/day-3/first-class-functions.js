// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    /* create return function that checks if a given value (x) is greater 
    than the input base and return boolean. Otherwise, return "equal".*/
    console.log(base);
    return function(x) {
        if (x > base) {
            return true;
        } else if (x < base) {
            return false;
        } else {
            return "equal";
        }
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // Return a function that does the inverse of the previous problem.
       return function(x) {
        if (x < base) {
            return true;
        } else if (x > base) {
            return false;
        } else {
            return "equal";
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    /* Create a function that compares a given string's first index to the 
    startsWith character and returns true if so, false otherwise.*/
    return function(string) {
        if (startsWith.toLowerCase() === string[0].toLowerCase()){
            return true;
        } else {
            return false;
        }
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    /*Return a function that test if a given string's last character is strictly
    equal to the endsWith character. Control for case sensitivity.*/
        return function(string) {
        if (endsWith.toLowerCase() === string[string.length-1].toLowerCase()){
            return true;
        } else {
            return false;
        }
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // create an empty array literal named result.
    let result = [];
    //use a for loop to loop through the strings array.
    for (let i = 0; i < strings.length; i++) {
        /* Use .push to push the results of the modify function into the result
        array on each iteration.*/
        result.push(modify(strings[i]));
    }
    
    return result;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // Use a for loop to loop through the strings array.
    for (let i = 0; i < strings.length; i++){
        // use if statement to check if strings[i] is false, and return false if so.
        if (test(strings[i]) === false) {
            return false;
        } 
    }
    /* return true OUTSIDE of callback function loop. This ensures that all the 
    strings will be tested because you'll never get to return true if any of the 
    strings return false. */
    return true;
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
