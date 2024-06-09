//Exercise 1: Contact List Objective: Create a contact management system.
/*
Define a Contact Object:

Each contact should have properties like name, phone number, and email. Implement Functions:

Add a new contact to the list. Remove a contact by their name. List all contacts. Extended Features:

Implement a search functionality to find contacts by name. Update the details of an existing contact.
*/

const contact = {
    name : 'Kundai',
    phoneNumber : `065-456-8733`,
    email : 'kundai@icloud.com'
};


let txt = '';

for (let i in contact) {
    txt += contact[i] + ' ';
}

console.log(txt);

// Define an empty contact list
let contacts = [];


