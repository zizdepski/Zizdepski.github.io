// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
//Declare _.identity to be a function that takes a value as a parameter.
_.identity = function(value){
    //Return the value unchanged.
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
//Declare _.typeOf to be a function that takes a value as its parameter.
_.typeOf = function(value){
    //Use if statement to check if value is an array using Array.isArray and return "array" if so.
    if(Array.isArray(value)){
        return "array";
    //Use instanceof to check if value is a function and return "function" if so.
    } else if (value instanceof Function){
        return "function";
    //Check if value is null and return "null" if so.
    } else if (value === null){
        return "null";
    //Else, use typeof prototype to print other values as a string.
    } else {
        return typeof value;
    }
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
//Declare _.first to be a function that takes an array and a number as parameters.
_.first = function(array, num){
    //Use if statement to check if array is an array or given number is negative and return an empty array if so.
    if(!Array.isArray(array) || num < 0){
        return [];
    //Check if a number is given. If not, return 0 index of array.
    } else if (!num){
        return array[0];
    //Check if number is greater than the array length and return entire array if so.
    } else if (num > array.length) {
        return array;
    //Else, use slice method to return array sliced from 0 index to the given number.
    } else {
        return array.slice(0, num);
    }
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
//Declare _.last to be a function that takes an array and a number as parameters.
_.last = function(array, num){
    //Use if statement to test if array is an array or if the given number is less than 0.
    if(!Array.isArray(array) || num < 0){
        //return an empty array.
        return [];
        //If num is falsy, return last index of array.
    } else if (!num){
        return array[array.length - 1];
        //If num is greater than array length, return array.
    } else if (num > array.length) {
        return array;
        //Else, return array sliced from num to the end of array.
    } else {
        return array.slice(array.length - num, array.length);
    }
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//Declare _.indexOf to be a function that takes an array and a value as parameters.
_.indexOf = function(array, value){
    //Use for loop to0 loop through array.
    for(let i = 0; i < array.length; i++){
        //Use if statement to check if value is in array and return its index.
        if(array[i] === value){
            return i;
        } 
    }
    //Return -1 if no other code runs.
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
//Declare _.contains to be a function that takes an array and a value as parameters.
_.contains = function(array, value){
    //Declare variable result to be false.
    let result = false;
    //Use a for loop to loop through array.
    for(let i = 0; i < array.length; i++){
        /*Use if statement to check if array[i] is strictly equal to the value and 
        change result to true if so. Use ternary operator.*/
        if(array[i] === value ? true : false){
            result = true;
        }
    }
    //Return the result.
    return result;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
//Declare _.each to be a function that takes a collection and a function as parameters.
_.each = function(collection, func) {
    //Use if statement and Array.isArray to check if collection is an array.
    if(Array.isArray(collection)) {
        //Use a for loop to loop through array.
        for(var i = 0; i < collection.length; i++) {
            //Call func with parameters collection[i], i, and collection.
            func(collection[i], i, collection);
        }
    //Else if collection is an object.
    } else {
        //Use for in loop to loop through object.
        for (var key in collection) {
            //Call func with parameters collection[key], key, and collection.
            func(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
//Declare _.unique to be a function that takes an array as a parameter. 
_.unique = function(array){
    //Declare variable uniqueArr and set it to an empty array.
    let uniqueArr = [];
    //Use for loop to loop through array.
    for(let i = 0; i < array.length; i++){
        /*Use if statement and _.indexOf with uniquArr and array[i] as parameters
        to check if calling this function gives a result of -1. */ 
        if(_.indexOf(uniqueArr, array[i]) === -1){
            //If so, use push to add array[i] to uniqueArr.
            uniqueArr.push(array[i]);
        }
    }
    //Return uniqueArr.
    return uniqueArr;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
//Declare _.filter to be a function that takes an array and a function as parameters.
_.filter = function(array, func){
    //Declare a variable filterArr set to an empty array.
    let filterArr = [];
    //Use for loop to loop through array.
    for(let i = 0; i < array.length; i++){
        /*Use if statement to check if the result of calling func with parameters 
        array[i], i and array is truthy.*/
        if(func(array[i], i, array)){
            //If so, push array[i] into filterArr.
            filterArr.push(array[i]);
        }
    }
    //Return filterArr.
    return filterArr;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
//Declare _.reject to be a function that takse an array and a function as parameters.
_.reject = function(array, func){
    //Declare a variable rejectArr set to an empty array.
    let rejectArr = [];
    //Use for loop to loop through array.
    for(let i = 0; i < array.length; i++){
        //Use if statement to check if calling func with parameters array[i], i and array is falsy.
        if(!func(array[i], i, array)){
            //If so, push array[i] into rejectArr.
            rejectArr.push(array[i]);
        }
    }
    //Return rejectArr.
    return rejectArr;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
//Declare _.partition to be a function that takes an array and a function as parameters.
_.partition = function(array, func){
    //Declare variables passing and failing each set to an empty array.
    let passing = [];
    let failing = [];
    //Declare a variable result set to an array with passing and failing inside.
    let result = [passing, failing];
    //Use a for loop to loop through array.
    for(let i = 0; i < array.length; i++){
        //Use if statement to check if calling func with parameters array[i], i and array is truthy.
        if(func(array[i], i, array)){
            //if so, push array[i] into passing array.
            passing.push(array[i]);
        //Else, push array[i] into failing array.
        } else {
            failing.push(array[i]);
        }
    }
    //Return result.
    return result;
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
//Declare _.map to be a function that takes a collection and a function as parameters.
_.map = function(collection, func){
    //Declare a variable result set to an empty array.
    let result = [];
    //Use .each function to iterate through arrays or objects.
    _.each(collection, function(val, i, col){
        //Use push method to add the result of calling func with parameters val, i and col.
        result.push(func(val, i, col));
    });
    //Return result.
    return result;
};
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
//Declare _.pluck to be a function that takes an array and a property as parameters.
_.pluck = function(array, prop){
    /*Declare a variable result set to equal the result of calling _.map with 
    parameters array and a function with an elem parameter.*/
    let result = _.map(array, function(elem){
        //Return elem[prop].
        return elem[prop];
    });
    //Return result.
    return result;
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
    //Declare a result variable to be true.
    let result = true;
    //Use if statement to check if func is given.
    if(func === undefined || func === null){
        //If it isn't, call the each function on collection to check the truthiness of values within.
        _.each(collection, function(val, i, col){
            //If values are falsy, result is false.
            if(!val){
                result = false;
            }
        });
    } else {
        //Call the each function on collection to check the truthiness of calling func on its values.
        _.each(collection, function(val, i, col){
            //Use if statement to check if running func on collection is false. If so, result is false.
            if(!func(val, i, col)){
            result = false;
            }
        });
    }
    //If result never becomes false, it is returned as true.
    return result;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    console.log(collection, func);
    //Declare a result variable to be false.
    let result = false;
    //Use if statement to check if func is given.
    if(func === undefined || func === null){
        //If it isn't, call the each function on collection to check the truthiness of values within.
        _.each(collection, function(val, i, col){
            //If values are truthy, result is true.
            if(val){
                result = true;
            }
        });
    } else {
        //Call the each function on collection to check the truthiness of calling func on its values.
        _.each(collection, function(val, i, col){
            //Use if statement to check if running func on collection is truthy. If so, result is true.
            if(func(val, i, col)){
            result = true;
            }
        });
    }
    //If result never becomes true, it is returned as true. Otherwise, false.
    return result;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    //check if a seed is given.
    if (seed !== undefined){
    //if seed exists, loop over the array.
        for (var i = 0; i < array.length; i++){
            //Reassign seed to be the value from calling func on seed, array[i], i and array.
            seed = func(seed, array[i], i, array);
        }
        //Return the seed.
        return seed;
        // if there is no seed given
    } else {
        //Reassign seed to array[0].
        seed = array[0];
        // loop through array starting at 1.
        for (var i = 1; i < array.length; i++){
            //Reassign seed to be the value from calling func on seed, array[i], i and array.
            seed = func(seed, array[i], i, array);
        }
        //Return the seed.
        return seed;
    }
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
/*Declare _.extend to be a function that takes object1, object2 and the spread 
operator to account for a variable number of additional objects.*/ 
_.extend = function(object1, object2, ...obj){
    //Declare a variable newObj and set it to equal Object.assign with the parameters passed in.
    //let array = Array.from(arguments)
    let newObj = Object.assign(object1, object2, ...obj);
    //Return newObj.
    return newObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
