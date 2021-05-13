//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare function objectValues with an object parameter.
function objectValues(object) {
    //Use Object.values method to return object values in an array.
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare function keyToString with an object parameter.
function keysToString(object) {
    //Declare a variable keyArr and set it to Object.keys(object) to put keys in array.
    let keyArr = Object.keys(object);
    //Return keyArr joined by a space.
    return keyArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare function valuesToString with an object parameter.
function valuesToString(object) {
    //Declare variable valArr set to Object.values(object) 
    let valArr = Object.values(object);
    //Declare variable stringVals set to an empty array.
    let stringVals = [];
    //Use for loop to loop through valArr array.
    for(let i = 0; i < valArr.length; i++){
        //Use if statement and typeof to check if array elements are strings.
        if(typeof valArr[i] === "string"){
            //If so, push them into stringVals array.
            stringVals.push(valArr[i]);
        }
    }
    //Return stringVals joined by a space.
    return stringVals.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare a function arrayOrObject that takes a collection parameter.
function arrayOrObject(collection) {
    //Use if statement and Array.isArray to check if collection is an array.
    if(Array.isArray(collection)){
        //If so, return "array".
        return "array";
    //Else if typeof collection is "object", null and not an instance of date, return "object".
    } else if (typeof collection === "object" && collection !== null && collection instanceof Date === false){
        return "object";
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare funciton capitalizeWord that takes a string parameter.
function capitalizeWord(string) {
    //Use template literals to return 0 index of string to upper case added to string sliced at index 1. 
    return `${string[0].toUpperCase()}${string.slice(1)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare funciton capitalizeAllWords that takes a string parameter.
function capitalizeAllWords(string) {
    //Declare variable stringArr set to string.split by a space.
    let stringArr = string.split(" ");
    //Use for loop to iterate through stringArr.
    for(let i = 0; i < stringArr.length; i++){
        /*Reassign stringArr on each iteration to equal the upper cased 0 index of each of 
        its elements combined with each element sliced at index 1. Use template literals*/
        stringArr[i] = `${stringArr[i][0].toUpperCase()}${stringArr[i].slice(1)}`;
    }
    //Return stringArr joined by a space.
    return stringArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare function welcomMessage with an object parameter.
function welcomeMessage(object) {
    /*Declare a variable message set to equal the object name property with the first 
    character capitalized concatenated with the name property sliced at index 1.*/
    let message = "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + "!";
    return message;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare function profileInfo that takes an object parameter.
function profileInfo(object) {
    //Declare a variable capName to object name property with first character capitalized.
    let capName = object.name[0].toUpperCase() + object.name.slice(1);
    //Declare a variable capSpec to object species property with first character capitalized.
    let capSpec = object.species[0].toUpperCase() + object.species.slice(1);
    //Use template literal to return a string with capName and capSpec.
    return `${capName} is a ${capSpec}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare function maybeNoises that takes an object parameter.
function maybeNoises(object) {
    //Use if statement to check if object has a noises property or if the length of the property is 0.
    if(!object.noises || object.noises.length === 0){
        //If so, return "there are no noises".
        return `there are no noises`;
    } else {
        //Return object.noises joined by an empty space.
        return object.noises.join(" ");
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare function hasWord that takes a string and a word as parameters.
function hasWord(string, word) {
    //Use if statement and indexOf to check if string contains given word. 
    if(string.toLowerCase().indexOf(word.toLowerCase()) !== -1){
        //if so, return true. Otherwise, false.
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare function addFriend that takes a name and object parameter.
function addFriend (name, object) {
    //push name into object.friends property array.
    object.friends.push(name);
    //Return object.
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare function isFriend that takes name and object as parameters.
function isFriend(name, object) {
  //Use if statement to check if object.friends property is falsy and return false if so.
  if(!object.friends){
      return false;
  } else {
      //Else, use a for loop to loop through object.friends array.
      for(var i = 0; i < object.friends.length; i++){
          //Use if statement to check if array element is equal to given name. control for case sensitivity.
          if(object.friends[i].toUpperCase() === name.toUpperCase()){
              //Return true if so.
              return true;
          }
      }
  }
  //Return false if there are no friends, otherwise true.
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare function nonFriends that takes a name and array parameters.
function nonFriends(name, array) {
    //Declare variable nonHomies set to an empty array.
    let nonHomies = [];
    //Use a for loop to loop through array.
    for(let i = 0; i < array.length; i++){
        /*Use if statement to check if element property name is not equal to given name
        and that calling the isFriend function with name and array[i] is falsy.*/
        if(array[i].name !== name && !isFriend(name, array[i])){
            //If so, push array[i] into nonHomies array.
            nonHomies.push(array[i].name); 
        }
    }
    //Return nonHomies. Sad. 
    return nonHomies;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare function updateObject that takes an object, key and value as parameters.
function updateObject(object, key, value) {
    //Use if statement to check if object[key] equals null.
    if(object[key] === null){
        //if so, use dot notation to create a key equal to value.
        object.key = value;
    } else {
        //Else, object[key] is equal to value.
        object[key] = value;
    }
    //Return the object.
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare function removeProperties that takes an object and an array as parameters.
function removeProperties(object, array) {
    //Declare variable keysArr set to Object.keys(object).
    let keysArr = Object.keys(object);
    //Declare variable valsArr set to Object.values(object).
    let valsArr = Object.values(object);
    //Declare variable propArr set to valsArr joined with keysArr using .concat method.
    let propArr = valsArr.concat(keysArr);
    //Use for loop to loop through array.
    for(let i = 0; i < array.length; i++){
        //Use if sttement and includes method to check if any elements in propArr exist in given array.
        if(propArr.includes(array[i])){
            //If so, use delete method to remove array[i].
            delete object[array[i]];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Declare function dedup that takes an array parameter.
function dedup(array) {
   //Declare a variable uniqueArr set to an empty array.
   let uniqueArr = []; // => Could also use spread operator and new to create a unique Set. Like so [...new Set(array)];
   //Use a for loop to loop through array.
   for(let i = 0; i < array.length; i++){
       //Use if statement and indexOf to check if the index of array[i] exists in uniqueArr. 
       if(uniqueArr.indexOf(array[i]) === -1){
           //If it does not exist, push array[i].
           uniqueArr.push(array[i]);
       }
   }
   //Return uniqueArr.
    return uniqueArr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}