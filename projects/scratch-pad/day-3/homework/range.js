// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // create a variable called array set to an empty array. 
    let array = [];
    //Use if statement to check if start is smaller than end.
    if (start < end){
        //Use for loop to loop forward through range.
        for (let i = start; i <= end; i++) {
            //Use .push to push i into array at each iteration.
            array.push(i);
        }
    // Use else if to check if start is bigger than end. 
    } else if (start > end) {
        // Use for loop to loop backwards.
        for (let i = start; i >= end; i--) {
            // .push i to array.
            array.push(i);
        }
    } 
    // Return array.
    return array;
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
