// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
//Create a function called makeContact that takes 3 parameters: id, nameFirst and nameLast.
function makeContact(id, nameFirst, nameLast) {
    /*Declare a variable called contactObj that is equal to and object with 
    keys of id, nameFirst and nameLast. values have the same names as the parameters.*/
    var contactObj = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
    //Return the contact object.
    return contactObj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    //Create an array literal called contacts.
     let contacts = [];
    
    return {
        // we implemented the length api for you //
        //Create the length key with a function as its value.
        length: function() {
            //return the number of contacts with .length method.
            return contacts.length;
        },
        //Create addContact key with a function that takes a contact object as an argument.
        addContact: function(contactObj){
            // Use .push to add contactObj to contacts.
            contacts.push(contactObj);
        },
        //Create findContact key with a value of a function that takes a full name.
        findContact: function(fullName){
            //Use for loop to loop through contacts array.
            for (let i = 0; i < contacts.length; i++){
                /*Use if statement to check if the given full name equals the concatenated first
                and last name of any contacts.*/
                if(fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){
                    //Return a matching full name.
                    return contacts[i];
                } else {
                    // Or return undefined if no match is found.
                    return undefined;
                }
            }
        },
        //create removeContact key that has the value of a function that takes a contact object.
        removeContact: function(contactObj){
            //Use .splice method to remove the given contact object from contacts.
            contacts.splice(contacts[contactObj], 1);
        },
        //Create printAllContactNames key that has a value of a function.
        printAllContactNames: function(){
            //declare a variable called names that equals an empty string
            let names = "";
            //create a for loop to loop through contacts.
            for(let i = 0; i < contacts.length; i++){
                /*Use += to addfirst and last names for each contact using template 
                literals to the names string.*/
                names += (`${contacts[i].nameFirst} ${contacts[i].nameLast}\n`);
            }
            /* Return names and use the .trim method to remove the new line character
            from the end of the last full name*/
            return names.trim();
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
