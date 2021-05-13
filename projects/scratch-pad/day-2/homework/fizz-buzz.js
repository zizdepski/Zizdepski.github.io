// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // Create for loop that will print 1-100.
    for (let i = 1; i < 101; i++) {
        /* Use if statement and the modulo (%) operator to apply conditions to i.
        If the remainder of i divided by 15 strictly equals 0, "FizzBuzz" is printed.*/
        if (i % 15 === 0){
            console.log("FizzBuzz");
            // If the remainder of i divided by 3 is 0, "Fizz" is printed.
        } else if (i % 3 === 0) {
            console.log("Fizz");
            // If the remainder of i divided by 5 is 0, "Buzz" is printed.
        } else if (i % 5 === 0) {
            console.log("Buzz");
            // Use else statement to print all other values of i.
        } else {
            console.log(i);
        }
    }



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}